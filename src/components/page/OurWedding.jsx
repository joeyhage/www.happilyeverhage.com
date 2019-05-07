import React, { Component } from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import camera from '../../resources/our-wedding-page/camera.svg';
import church from '../../resources/our-wedding-page/church.svg';
import gift from '../../resources/our-wedding-page/gift.svg';
import images from '../../resources/our-wedding-page/images';
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

  constructor(props) {
    super(props);
    this.state = { heroImage: null };
    this.determineHeroImage = this.determineHeroImage.bind(this);
  }

  render() {
    return (
      <div className='is-clipped' id='our-wedding-page'>
        <Helmet>
          <title>Abby Hanson and Joey Hage&apos;s Wedding</title>
          <meta name='description'
                content='Abby Hanson and Joey Hage are getting married! The wedding will be held on November 9th, 2019 in West Des Moines, IA. #ToHageAndToHold' />
        </Helmet>
        <img src={this.state.heroImage} alt='Abby and Joey' />
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

  componentDidMount() {
    this.determineHeroImage();
    window.addEventListener('resize', this.determineHeroImage);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.determineHeroImage);
  }

  determineHeroImage() {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    this.setState({ heroImage: (mediaQuery && mediaQuery.matches) ? images.mobile : images.tablet });
  }
}

export default OurWedding;