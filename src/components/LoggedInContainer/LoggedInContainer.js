
import React, {PropTypes} from 'react';
import styles from './LoggedInContainer.css';
import withStyles from '../../decorators/withStyles';
import LoggedIn from '../LoggedIn';
import Sidebar from '../Sidebar';

@withStyles(styles)
class LoggedInContainer extends React.Component{

  state = { isOpen: false};

  static propTypes = {
    user: PropTypes.object.isRequired
  };

  constructor(){
    super();
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    console.log("TOGGLE");
    $('.ui.vertical.menu').toggle();

    if(this.state.isOpen) {
      this.setState({isOpen: false});
    }else{
      this.setState({isOpen: true});
    }
  }

  render(){
    let currentUser = this.props.user;
    let boundToggle = this.toggleSidebar.bind(this);
    return (
      <span>
        <LoggedIn user={this.props.user} toggleSidebar={boundToggle}/>
        <Sidebar user={this.props.user} open={this.state.isOpen}/>
      </span>
    );
  }
}

export default LoggedInContainer;


