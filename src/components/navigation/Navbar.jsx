import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import NavItem from './NavItem';
import registryLinks from '../../resources/registry-page/registry-links';

const TextNavItem = props => {
  return (
    <h5 className='navbar-item is-hidden-touch has-text-white'>{props.children}</h5>
  );
};

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActiveNavbar: false
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  render() {
    const burgerClasses = classNames('navbar-burger', 'burger', {
      'is-active': this.state.isActiveNavbar
    });
    const navigationClasses = classNames('navbar-menu', {
      'is-active': this.state.isActiveNavbar
    });
    const registryLinkClasses = classNames('navbar-link', 'is-uppercase', 'is-page-link', {
      'is-active': this.props.location.pathname === '/registry'
    });
    return (
      <nav className='navbar is-transparent is-fixed-top' id='navigation'>
        <TextNavItem>November 9th, 2019</TextNavItem>
        <div className='container'>
          <div className='navbar-brand'>
            <NavItem to='/' className='is-hidden-desktop is-size-4'>Abby & Joey</NavItem>
            <div className={burgerClasses} data-target='navigation' onClick={this.toggleNavbar}>
              <span />
              <span />
              <span />
              <br />
              <p>Menu</p>
            </div>
          </div>

          <div className={navigationClasses}>
            <div className='navbar-start'>
              <NavItem to='/' className='is-hidden-desktop is-page-link'>
                Our Wedding
              </NavItem>
              <NavItem to='/details' className='is-page-link'>
                Details
              </NavItem>
              <NavItem to='/photos' className='is-page-link'>
                Photos
              </NavItem>
              <NavItem to='/' className='is-hidden-touch is-size-3 is-page-link'>Abby & Joey</NavItem>
              <div className='navbar-item has-dropdown is-hoverable'>
                <Link to='/registry' className={registryLinkClasses}>
                  Registry
                </Link>
                <div className='navbar-dropdown'>
                  <a href={registryLinks.zola} className='navbar-item' target='_blank' rel='noopener noreferrer'>
                    Zola
                  </a>
                  <a href={registryLinks.target} className='navbar-item' target='_blank' rel='noopener noreferrer'>
                    Target
                  </a>
                  <a href={registryLinks.anthropologie} className='navbar-item' target='_blank' rel='noopener noreferrer'>
                    Anthropologie
                  </a>
                </div>
              </div>
              <NavItem to='/rsvp' className='is-page-link'>
                RSVP
              </NavItem>
            </div>
          </div>
        </div>
        <TextNavItem>#ToHageAndToHold</TextNavItem>
      </nav>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({ isActiveNavbar: false });
    }
  }

  toggleNavbar() {
    this.setState(prevState => ({ isActiveNavbar: !prevState.isActiveNavbar }));
  }
}

export default withRouter(Navbar);