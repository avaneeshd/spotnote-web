
import React, {PropTypes} from 'react';
import styles from './LoggedIn.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class LoggedIn extends React.Component{

  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render(){
    let currentUser = this.props.user;
    console.log(this.props.toggleSidebar);
    return (
        <button className="ui green label" onClick={this.props.toggleSidebar}>
          <img className= "ui right spaced avatar image" src={currentUser.get('profilePic')? currentUser.get('profilePic').url(): ''} />
          <span>{currentUser.get("name")}</span>
        </button>
    );
  }
}

export default LoggedIn;


