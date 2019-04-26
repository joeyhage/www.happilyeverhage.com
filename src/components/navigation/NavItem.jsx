import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class NavItem extends React.Component {

  render() {
    const navItemClasses = classNames(
      this.props.className, 'navbar-item', 'is-uppercase', {
        'is-active': this.props.location && this.props.location.pathname === this.props.to
      }
    );
    return (
      <Link to={this.props.to} className={navItemClasses}>
        {this.props.children}
      </Link>
    );
  }
}

export default withRouter(NavItem);