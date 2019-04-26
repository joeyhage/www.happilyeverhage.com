import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import loading from '../../resources/rsvp-page/loading.svg';
import { getApiFor, postApiWith } from '../../util/apiFetch';

const Invite = () => {
  const style = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#06182b'
  };

  return (
    <div style={style}>
      <img src={loading} alt='loading' />
    </div>
  );
};

class RSVP extends Component {

  constructor(props) {
    super(props);
    const invitationID = localStorage.getItem('invitationID');
    const isValidInvitationID = /^[a-fA-F0-9-]{36}$/.test(invitationID);
    this.state = {
      search: '',
      invitation: {},
      loading: isValidInvitationID
    };
    if (isValidInvitationID) {
      this.getInvitation(invitationID);
    }
  }

  render() {
    return this.state.loading ? (<Invite />) : (
      <div className='container' id='rsvp-page'>
        <Helmet>
          <title>RSVP - Abby Hanson & Joey Hage&apos;s Wedding</title>
        </Helmet>
        <h2 className='is-3'>
          Please enter the name(s) on your Save the Date or invitation.
        </h2>
      </div>
    );
  }

  getInvitation(invitationID) {
    getApiFor('/invitations/id/' + invitationID)
      .then(json => this.setState({ invitation: json }))
      .catch(error => console.error(error))
      .finally(() => this.setState({ loading: false }));
  }
}

export default RSVP;