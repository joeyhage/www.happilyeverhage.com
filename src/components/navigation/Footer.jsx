import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <footer className='footer'>
        <div className='content'>
          <div className='columns'>
            <div className='column has-text-left-tablet has-text-centered-mobile'>
              <p>Abby Hanson & Joey Hage</p>
              <p>November 9th, 2019</p>
              <p>West Des Moines, IA</p>
            </div>
            <div className='column has-text-right-tablet has-text-centered-mobile'>
              <p>Website designed and created by Abby & Joey</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;