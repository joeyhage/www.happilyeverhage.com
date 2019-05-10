import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Dropdown from '../common/Dropdown';
import images from '../../resources/details-page/images';

class Details extends Component {

  render() {
    return (
      <div className='container is-clipped' id='details-page'>
        <Helmet>
          <title>Details - Abby Hanson and Joey Hage&apos;s Wedding</title>
          <meta name='description'
                content='The wedding mass will begin at 11:00 AM on November 9th, 2019 in West Des Moines, IA with a reception to follow in Indianola, IA.' />
        </Helmet>
        <div className='columns is-centered'>
          <div className='column'>
            <img src={images.saintFrancis} alt='St. Francis of Assisi Catholic Church - Sanctuary' />
            <h5 className='is-uppercase'>The Wedding</h5>
            <p>
              The wedding mass will begin at 11:00 AM<br />
              <br />
              <a href='https://goo.gl/maps/NKs9mZ14SYF2' target='_blank' rel='noopener noreferrer'>
                <b>St. Francis of Assisi Catholic Church</b><br />
                7075 Ashworth Rd.<br />
                West Des Moines, IA 50266</a><br />
              <br />
              * A collection will be taken up at mass for the local DMARC food pantry in lieu of a dollar dance.<br />
              * Please enjoy the mass and allow the photographer to take photos.<br />
              * We invite you to choose a seat, not a side!
            </p>
          </div>
          <div className='column'>
            <img src={images.reception} alt='Reception' />
            <h5 className='is-uppercase'>The Reception</h5>
            <p>
              The reception will be held immediately following mass.<br />
              <br />
              <a href='https://goo.gl/maps/c4v6ryn83yT2' target='_blank' rel='noopener noreferrer'>
                <b>St. Thomas Aquinas Catholic Church</b><br />
                210 Route 63 Hwy<br />
                Indianola, IA 50125</a><br />
              <br />
              * Please park on the North side.<br />
              * Reception is in the Great Hall.
            </p>
          </div>
        </div>
        <Dropdown title='Accommodations'>
          November 8th and/or November 9th<br />
          Reservations can be made until October 7th, 2019 under The Hanson-Hage Wedding.<br />
          <br />
          <b>The West Des Moines Marriott</b><br />
          <em>Room block not available yet, please check back soon</em><br />
          <a href='https://goo.gl/maps/Zh4rFHHaGWS2' target='_blank' rel='noopener noreferrer'>
            1250 Jordan Creek Pkwy<br />
            West Des Moines, IA 50266</a><br />
          <a href='tel:515-267-1500'>Hotel: (515) 267-1500</a><br />
          <a href='tel:1-888-236-2427'>Reservations: 1 (888) 236-2427</a><br />
          <br />
          <b>Best Western Plus Des Moines West Inn & Suites</b><br />
          <a href='https://goo.gl/maps/Ldj9NmU18GM2' target='_blank' rel='noopener noreferrer'>
            1450 NW 118th St.<br />
            Clive, IA 50325</a><br />
          <a href='tel:515-221-2345'>Hotel & Reservations: (515) 221-2345</a><br />
        </Dropdown>
        <Dropdown title='RSVP'>
          Please kindly let us know if you will be able to celebrate with us by October 1st, 2019. You can
          RSVP <u><Link to='/rsvp'>here</Link></u>.
        </Dropdown>
        <Dropdown title='Still have questions?'>
          Please contact us:<br />
          <a href='tel:515-290-9469'>515-290-9469</a><br />
          <a href='mailto:happilyeverhage@gmail.com?subject=Abby%20and%20Joey%27s%20Wedding' target='_blank'
             rel='noopener noreferrer'>happilyeverhage@gmail.com</a>
        </Dropdown>
      </div>
    );
  }
}

export default Details;