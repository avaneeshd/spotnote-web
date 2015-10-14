/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './Navigation.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import LoggedInContainer from '../LoggedInContainer';
import Search from '../Search';
import Parse from 'parse/node';

@withStyles(styles)
class Navigation {

  static propTypes = {
    user: PropTypes.object,
    className: PropTypes.string
  };

  render() {
    let loginMenu = <span>
      <a className="Navigation-link" href="/login" onClick={Link.handleClick}>Log in</a>
      <span className="Navigation-spacer divider">or</span>
      <a className="Navigation-link Navigation-link--highlight " href="/register" onClick={Link.handleClick}>Sign up</a>
      </span>;
    if(this.props.user !== null){
      let currentUser = Parse.User.current();
      loginMenu = <LoggedInContainer user={this.props.user}/>
    }

    return (
      <div className={classNames(this.props.className, 'Navigation')} role="navigation">
        <Search />
        <div className="Navigation-items">
            <a className="Navigation-link item" href="/explore" onClick={Link.handleClick}>Explore</a>
            <a className="Navigation-link item " href="/about" onClick={Link.handleClick}>About</a>
            <span className="Navigation-spacer"> | </span>
          {loginMenu}
        </div>
      </div>
    );
  }

}

export default Navigation;
