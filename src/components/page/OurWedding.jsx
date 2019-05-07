import React, { Component } from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import camera from '../../resources/our-wedding-page/camera.svg';
import church from '../../resources/our-wedding-page/church.svg';
import gift from '../../resources/our-wedding-page/gift.svg';
import rsvp from '../../resources/our-wedding-page/rsvp.png';

const QuickLink = props => {
  const quickLinkClasses = classNames('quick-link', props.children.toLowerCase());
  return (
    <div className='column is-narrow'>
      <div className={quickLinkClasses}>
        <Link to={props.link}>
          <img src={props.img} alt={props.alt} />
          <br />
          <h2 className='is-size-4'>{props.children}</h2>
        </Link>
      </div>
    </div>
  );
};

class OurWedding extends Component {

  render() {
    return (
      <div className='is-clipped' id='our-wedding-page'>
        <Helmet>
          <title>Abby Hanson and Joey Hage&apos;s Wedding</title>
          <meta name='description' content='Abby Hanson and Joey Hage are getting married! The wedding will be held on November 9th, 2019 in West Des Moines, IA. #ToHageAndToHold' />
        </Helmet>
        <img
          src='https://lh3.googleusercontent.com/yHXM9SuLystaGBXG5WZA8X2sTJyuD4VymTRcNuZx0AzZ-J4ZcOt0qNy1CedW0YdbCD_HZ9ofvSYiyE7yTK4hdsFwMuqlnw1Qyi-mK16Ovh827Q9fstzoNUE6zNTNtsBLDC-Sr0pwAeMQCdBhvyqXST5dOudGt56jjhl5zeDVNhcjmJgnV_RdEj592WKOpGNrWx6zHs4zYGZc-rujy8Iqfslo7dU-d6WW1qxZtEfdCgA8YecMavKXSPdkSbezbffOSi63E5tojNi4THvGeewTMBPnPO5HbLeoXb77a3QuqIpRLwYiVFpteeOOCjYJCsocHhlqwBn6x_JE6U2VeB_eXuSBoe424EuCzr7QIz8W1M2mDVtpcoznd7rAeIvkp8XxI7LqU5vxLbdRqr0GVo3_dn8FsEHo0frjkBn8SLDm86__8zVYHT8Ae57nngDL15CmT2E37fKw2vzyc5vd5sCsWG8b5otxuXS_zU57ZAE5SD03FWMk6o7bNtdvGcEhW5RxKjGL5qzn08ylqo8DXsxypi2-D4FNL-Mq7jiPWO7uc4qXNZ5GyvV1Wwv55maiGw3fMavKKJLhkwEcjxF_f5EfJBgCPvSb6C7_wZJxHHlaMtrsaC0Rt7Utd7RHoQLK3vMFPnmawYs8nV4AaYsHyggfxBWmpHNr3SyQ7LxlBp7l0VNCRsZVN4pHQG5vNMdSv-negdh9TjEoi8k1lKOUOCXCdyeE=w1420-h947-no'
          alt='Abby and Joey' />
        <div className='burgundy'>
          <h2 className='is-size-3 great-vibes'>
            We're Getting Married!
          </h2>
        </div>
        <div id='names'>
          <h2 className='is-size-2'>Abigail Irene Hanson & Joseph Michael Hage</h2>
        </div>
        <div className='burgundy'>
          <h2 className='is-size-6'>
            November 9th, 2019 | West Des Moines, IA
          </h2>
        </div>
        <div className='container'>
          <div className='columns is-centered is-mobile'>
            <QuickLink link='/details' img={church} alt='Details'>Details</QuickLink>
            <QuickLink link='/rsvp' img={rsvp} alt='RSVP'>RSVP</QuickLink>
          </div>
          <div className='columns is-centered is-mobile'>
            <QuickLink link='/registry' img={gift} alt='Registry'>Registry</QuickLink>
            <QuickLink link='/photos' img={camera} alt='Photos'>Photos</QuickLink>
          </div>
          <h2 className='is-size-3 hashtag'>#ToHageAndToHold</h2>
        </div>
      </div>
    );
  }
}

export default OurWedding;