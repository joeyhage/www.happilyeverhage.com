import React, { Component } from 'react';
import classNames from 'classnames';

class ViewRSVP extends Component {

  render() {
    const { invitation, onNewRsvp, onRsvpChange } = this.props;
    const isAccept = invitation.rsvp_count !== 0;
    const isRegret = invitation.rsvp_date && invitation.rsvp_count === 0;
    const isSaved = invitation.rsvp_date === 'today'
                    || (invitation.rsvp_date !== null && invitation.rsvp_date !== 'TBD');

    const acceptClasses = classNames('button', 'is-medium', { 'selected': isAccept });
    const regretClasses = classNames('button', 'is-medium', { 'selected': isRegret });
    return (
      <div className='container is-clipped'>
        <div className='columns is-centered'>
          <div className='column is-4-desktop is-8-tablet is-12-mobile'>
            <div className='section' id='view-rsvp'>
              <h2 className='is-size-2 has-text-gold'>RSVP</h2>
              <hr />
              <h2 className='is-size-3 great-vibes'>{invitation.name}</h2>
              <hr />
              <h2 className='is-size-4'>Will you be able to attend?</h2>
              <h2 className='is-size-4'>November 9th, 2019</h2>
              <div className='field is-grouped' id='rsvp-decision'>
                <p className='control'>
                  <button className={acceptClasses} value='accept' onClick={onRsvpChange}>Accept</button>
                </p>
                <p className='control'>
                  <button className={regretClasses} value='regret' onClick={onRsvpChange}>Regret</button>
                </p>
              </div>
              <div className='section'>
                {Boolean(isAccept && invitation.rsvp_count > 1) &&
                 <React.Fragment>
                   <h2 className='is-size-5'>
                     Your invitation includes {invitation.invite_count} guests. How many plan to attend?
                   </h2>
                   <div className='columns is-centered is-mobile'>
                     <div className='column is-narrow'>
                       <div className='select'>
                         <select value={invitation.rsvp_count} onChange={onRsvpChange}>
                           {this.createRsvpCountSelect()}
                         </select>
                       </div>
                     </div>
                   </div>
                 </React.Fragment>
                }
                {isSaved
                 ? (<React.Fragment>
                      <hr />
                      <h2 className='is-size-5' id='thank-you'>
                        Thank you for your RSVP; it has been successfully recorded.
                      </h2>
                      <button className='button' onClick={onNewRsvp}>Find Another Invitation</button>
                    </React.Fragment>
                 )
                 : <button className='button save' value='save' onClick={onRsvpChange}>Save</button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  createRsvpCountSelect() {
    const options = new Array(this.props.invitation.invite_count);
    for (let i = 0; i < options.length; i++) {
      options[i] = <option key={i} value={i + 1}>{i + 1}</option>;
    }
    return options;
  }
}

export default ViewRSVP;