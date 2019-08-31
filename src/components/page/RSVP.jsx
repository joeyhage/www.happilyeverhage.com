import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Modal from '../rsvp/Modal';
import ViewRsvp from '../rsvp/ViewRSVP';

import FindInvitation from '../rsvp/FindInvitation';
import Loading from '../rsvp/Loading';
import { getApiFor, postApiWith } from '../../util/apiFetch';

class RSVP extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      invitation: JSON.parse(sessionStorage.getItem('invitation')),
      loading: false,
      message: null
    };
    this.onChange = this.onChange.bind(this);
    this.findInvitation = this.findInvitation.bind(this);
    this.newRsvp = this.newRsvp.bind(this);
    this.saveRsvp = this.saveRsvp.bind(this);
    this.onRsvpChange = this.onRsvpChange.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  render() {
    return (
      <div id='rsvp-page'>
        <Helmet>
          <title>RSVP - Abby Hanson and Joey Hage&apos;s Wedding</title>
          <meta name='description'
                content='RSVP for the wedding of Abby Hanson and Joey Hage on November 9th, 2019 in West Des Moines, IA. #ToHageAndToHold' />
        </Helmet>
        {this.state.loading
         ? (<Loading />)
         : (Boolean(this.state.invitation)
            ? <ViewRsvp invitation={this.state.invitation} message={this.state.message} onNewRsvp={this.newRsvp}
                        onSaveRsvp={this.saveRsvp} onRsvpChange={this.onRsvpChange} />
            : <FindInvitation search={this.state.search} onChange={this.onChange} onSearch={this.findInvitation} />)
        }
        <div className='is-clipped'>
          <Modal message={this.state.message} onModalClose={this.onModalClose} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    if (!this.state.invitation) {
      const invitationID = localStorage.getItem('invitationID');
      if (RSVP.isValidInvitationID(invitationID)) {
        this.getInvitation(invitationID);
      }
    }
  }

  onChange({ target }) {
    this.setState({ [target.id]: target.value });
  }

  getInvitation(invitationID) {
    this.setState({ loading: true });
    getApiFor('/invitations/id/' + invitationID)
      .then(json => {
        this.setState({ invitation: json });
        sessionStorage.setItem('invitation', JSON.stringify(json));
      })
      .catch(() => {
        this.setState({ message: { title: 'Error', text: 'An error occurred while retrieving your invitation.' } });
      })
      .finally(() => this.setState({ loading: false }));
  }

  findInvitation(searchQuery) {
    this.setState({ loading: true });
    getApiFor('/invitations/find/' + searchQuery)
      .then(json => {
        this.setState({ invitation: json, search: '' });
        localStorage.setItem('invitationID', json.invitation_id);
        sessionStorage.setItem('invitation', JSON.stringify(json));
      })
      .catch(() => {
        this.setState({
          message: {
            title: 'Our apologies!',
            text: 'We were unable to find your invitation. Please make sure you enter your name exactly as it '
                  + 'appears on your invitation. e.g. The Smith Family.'
          }
        });
      })
      .finally(() => this.setState({ loading: false }));
  }

  newRsvp() {
    sessionStorage.removeItem('invitation');
    localStorage.removeItem('invitationID');
    this.setState({ search: '', invitation: null, loading: false, message: null });
    window.scrollTo(0, 0);
  }

  saveRsvp() {
    this.setState({ loading: true });
    postApiWith('/rsvp', this.state.invitation)
      .then(() => {
        const invitation = { ...this.state.invitation, rsvp_date: 'today' };
        sessionStorage.setItem('invitation', JSON.stringify(invitation));
        this.setState({
          invitation,
          message: {
            title: 'Thank you!',
            text: 'Your RSVP has been received. ' + (
              invitation.rsvp_count > 0
              ? 'We cannot wait to celebrate with you in November!'
              : 'Please keep us in your thoughts and prayers as we prepare for marriage.'
            )
          }
        });
      })
      .catch(() => {
        this.setState({ message: { title: 'Error', text: 'An error occurred while saving your RSVP.' } });
      })
      .finally(() => this.setState({ loading: false }));
  }

  onRsvpChange({ target }) {
    if (target.value === 'save') {
      this.saveRsvp();
    } else {
      let rsvp_count;
      switch (target.value) {
        case 'accept':
          rsvp_count = this.state.invitation.invite_count;
          break;
        case 'regret':
          rsvp_count = 0;
          break;
        default:
          rsvp_count = target.value;
      }
      this.setState(prevState => ({
        invitation: {
          ...prevState.invitation,
          rsvp_date: 'TBD',
          rsvp_count
        }
      }));
    }
  }

  onModalClose() {
    this.setState({ message: null });
  }

  static isValidInvitationID(invitationID) {
    return /^[a-fA-F0-9-]{36}$/.test(invitationID);
  }
}

export default RSVP;