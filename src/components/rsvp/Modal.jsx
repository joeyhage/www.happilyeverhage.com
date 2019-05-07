import React, { Component } from 'react';
import classNames from 'classnames';

import HLogoBurgundy from '../../resources/rsvp-page/H_Logo_Burgundy.png';

class Modal extends Component {

  render() {
    const { message } = this.props;
    const modalClasses = classNames('modal', { 'is-active': Boolean(message) });
    return (
      <div className={modalClasses}>
        <div className='modal-background' onClick={this.props.onModalClose} />
        <div className='modal-content'>
          {Boolean(message) &&
           <div className='box'>
             <div className='columns is-centered is-mobile'>
               <div className='column is-6'>
                 <img src={HLogoBurgundy} alt='HappilyEverHage' />
               </div>
             </div>
             <h2 className='is-size-3'>{message.title}</h2>
             <h2 className='is-size-4'>{message.text}</h2>
           </div>
          }
        </div>
        <button className='modal-close is-large' aria-label='close' onClick={this.props.onModalClose} />
      </div>
    );
  }
}

export default Modal;