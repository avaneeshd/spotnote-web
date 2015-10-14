
import React, {PropTypes} from 'react';
import styles from './Sidebar.css';
import withStyles from '../../decorators/withStyles';
import loginActions from '../../actions/LoginActions';

@withStyles(styles)
class Sidebar extends React.Component{

  static propTypes = {
    user: PropTypes.object.isRequired
  };

  logout(){
    console.log("LOGOUT");
    loginActions.logout();
  }

  render(){
    let currentUser = this.props.user;
    let classNames = "ui small vertical pointing menu Sidebar-menu"
    return (
      <div className={classNames}>
        <a className="item" onClick={this.logout}>Logout</a>
      </div>
    );
  }
}

export default Sidebar;


