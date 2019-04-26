import React, { Component } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showContent: Boolean(props.show),
    };
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const dropdownClasses = classNames('details-dropdown', {
      show: this.state.showContent
    });
    return (
      <div className='columns is-centered'>
        <div className='column is-narrow'>
          <div className={dropdownClasses}>
            <h5 className='is-uppercase' onClick={this.onClick}>
              {this.props.title}
              {' '}<FontAwesomeIcon icon={faAngleDown} alt='Chevron' />
            </h5>
            {this.state.showContent && <p>{this.props.children}</p>}
          </div>
        </div>
      </div>
    );
  }

  onClick() {
    this.setState(prevState => ({ showContent: !prevState.showContent }));
  }
}

export default Dropdown;