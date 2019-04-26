import classNames from 'classnames';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import registryLinks from '../../resources/registry-page/registry-links';
import registryIcons from '../../resources/registry-page/registry-icons';

const RegistryLink = props => {
  const registryLinkClasses = classNames('registry-link', props.children.toLowerCase());
  return (
    <div className='column is-narrow'>
      <div className={registryLinkClasses}>
        <a href={props.link} target='_blank' rel='noopener noreferrer'>
          <img src={props.img} alt={props.alt} />
        </a>
        <a href={props.link} target='_blank' rel='noopener noreferrer'>
          <h2 className='is-size-4 is-uppercase'>{props.children}</h2>
        </a>
      </div>
    </div>
  );
};

class Registry extends Component {

  render() {
    return (
      <div id='registry-page'>
        <Helmet>
          <title>Registry - Abby Hanson & Joey Hage&apos;s Wedding</title>
        </Helmet>
        <div className='burgundy'>
          <h2 className='is-size-1 great-vibes'>
            Registry
          </h2>
        </div>
        <div className='columns is-centered'>
          <div className='column is-6-desktop is-8-tablet is-12-mobile'>
            <div className='section'>
              <h2 className='has-text-white is-size-5'>
                Your presence at our wedding is the greatest gift of all. However, should you wish to help us celebrate
                with a gift, here is our registry information and some of our favorite places for your convenience.
              </h2>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='columns is-centered'>
            <RegistryLink link={registryLinks.zola} img={registryIcons.zola} alt='Zola'>
              Zola
            </RegistryLink>
            <RegistryLink link={registryLinks.anthropologie} img={registryIcons.anthropologie} alt='Anthropologie'>
              Anthropologie
            </RegistryLink>
            <RegistryLink link={registryLinks.target} img={registryIcons.target} alt='Target'>
              Target
            </RegistryLink>
          </div>
        </div>
        <div className='columns is-centered'>
          <div className='column is-narrow is-6-desktop is-8-tablet is-12-mobile favorites'>
            <h2 className='is-size-2'>
              Favorite Places to Eat
            </h2>
            <div className='columns is-centered'>
              <div className='column is-narrow'>
                <h3>Chick-fil-a</h3>
                <h3>Starbucks</h3>
                <h3>Applebee&apos;s</h3>
                <h3>Papa John&apos;s</h3>
                <h3>PF Chang&apos;s</h3>
                <h3>Texas Roadhouse</h3>
                <h3>The Cheesecake Factory</h3>
              </div>
              <div className='column is-narrow'>
                <h3>Local Cuisine:</h3>
                <h3>Simon&apos;s</h3>
                <h3>Mi Mexico</h3>
                <h3>Centro</h3>
                <h3>Bubba</h3>
                <h3>Eatery A</h3>
                <h3>Fong&apos;s</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='columns is-centered'>
          <div className='column is-narrow is-6-desktop is-8-tablet is-12-mobile favorites'>
            <h2 className='is-size-2'>
              Favorite Places to Shop
            </h2>
            <div className='columns is-centered'>
              <div className='column is-narrow'>
                <h3>Target</h3>
                <h3>Amazon</h3>
                <h3>Lowe&apos;s</h3>
                <h3>Ace Hardware</h3>
              </div>
              <div className='column is-narrow'>
                <h3>Cinemark</h3>
                <h3>Hotels.com</h3>
                <h3>Delta Airlines</h3>
                <h3>Hy-Vee</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='columns is-centered'>
          <div className='column is-narrow is-6-desktop is-8-tablet is-12-mobile favorites'>
            <h2 className='is-size-2'>
              Favorite Charities
            </h2>
            <div className='columns is-centered'>
              <div className='column is-narrow'>
                <h3>DMARC Food Pantry</h3>
                <h3>Catholic Charities</h3>
                <h3>Meals from the Heartland</h3>
                <h3>Feed My Starving Children</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registry;