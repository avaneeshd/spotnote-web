/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import styles from './LoginPage.css';
import withStyles from '../../decorators/withStyles';
import userStore from '../../stores/UserStore';
import loginActions from '../../actions/LoginActions';

@withStyles(styles)
class LoginPage extends React.Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  constructor(){
    super();
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(){
    let username = ReactDOM.findDOMNode(this.refs.txtUsername).value;
    let password = ReactDOM.findDOMNode(this.refs.txtPassword).value;
    loginActions.login(username, password);
  }

  render() {
    let title = 'Log In';
    this.context.onSetTitle(title);
    return (
      <div className="LoginPage">
        <div className="LoginPage-container">
          <h1>{title}</h1>
          <div className="ui form">
            <div className="field">
              <label>Email</label>
              <input ref="txtUsername" className="icon input" type="email" name="email"/>
            </div>
            <div className="field">
              <label>Password</label>
              <input ref="txtPassword" className="icon input" type="password" name="password"/>
            </div>
            <button className="ui basic button" onClick={this.handleLogin}>Login</button>
          </div>
        </div>
      </div>
    );
  }

}

export default LoginPage;
