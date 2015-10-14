/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import Parse from 'parse/node';
import localStorage from 'local-storage';
import Sidebar from '../Sidebar';
import UserStore from '../../stores/UserStore';


@withContext
@withStyles(styles)
class App extends React.Component {
  state= {user: null};

  constructor(){
    super();
    Parse.initialize("Hzf3GsQkGhxMan2Bc6WdejuFA556kuMjOPRbrK3c", "863biJKqJiqe4xorzaMxy8mKb763kLG5L3m2wFC4");
    this._onChange = this._onChange.bind(this);

    //Login with Session Token
    if(localStorage.get('parse_user_session')){
      //Login with Session ID
      let session_token = localStorage.get('parse_user_session');
      let that = this;
      Parse.User.become(session_token).then(function (user) {
        that.setState({user: user});
      }, function (error) {
          console.log("Error becoming User: "+ error);
      });
    }
  }

  componentDidMount(){
    UserStore.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
    UserStore.removeChangeListener(this._onChange);
  }

  _onChange(){
    console.log(UserStore.getCurrentUser());
    this.setState({user: Parse.User.current()});
  }

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object
  };

  render() {
    return !this.props.error ? (
      <div>
        <Header user={this.state.user} />
        {this.props.children}
        <Feedback />
        <Footer />
      </div>
    ) : this.props.children;
  }

}

export default App;
