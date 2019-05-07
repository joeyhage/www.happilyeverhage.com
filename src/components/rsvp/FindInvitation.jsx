import React, { Component } from 'react';

class FindInvitation extends Component {

  render() {
    const { onChange, onSearch, search } = this.props;
    return (
      <div>
        <div className='burgundy'>
          <h2 className='is-size-1 great-vibes'>RSVP</h2>
        </div>
        <div className='container is-clipped'>
          <div className='columns is-centered'>
            <div className='column is-6-desktop is-8-tablet is-12-mobile'>
              <div className='section'>
                <h2 className='has-text-white is-5'>
                  If you received an email Save the Date, please enter your email address. Otherwise, please enter the
                  name as it appears on your invitation.
                </h2>
                <br />
                <div className='field has-addons has-addons-centered' id='search-field'>
                  <label className='label is-sr-only' htmlFor='search'>Search</label>
                  <div className='control'>
                    <input className='input' id='search' type='text' placeholder='Name(s) or Email'
                           value={search} onChange={onChange} />
                  </div>
                  <div className='control'>
                    <button className='button' type='button' onClick={() => onSearch(search)}>Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className='is-size-3 hashtag'>#ToHageAndToHold</h2>
      </div>
    );
  }
}

export default FindInvitation;