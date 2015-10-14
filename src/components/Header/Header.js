/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, {PropTypes} from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';
import Logo from '../Logo'
@withStyles(styles)
class Header {
  static propTypes={
     user: PropTypes.object
  };

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <a className="Header-brand" href="/" onClick={Link.handleClick}>
              <Logo firstHalf='Spot' secondHalf='Note'/>
          </a>
          <Navigation className="Header-nav" user={this.props.user}/>
        </div>
      </div>
    );
  }

}

export default Header;
