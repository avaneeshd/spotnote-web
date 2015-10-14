
import React, {PropTypes} from 'react';
import modalStyle from './Modal.css';
import withStyles from '../../decorators/withStyles';

@withStyles(modalStyle)
class Modal extends React.Component{

  CLASSNAMES = {
    'container':{
      base:'modal-container',
      afterOpen: 'modal-container-afterOpen',
      beforeClose: 'modal-container-beforeClose'
    },
    'overlay':{
      base:'modal-overlay',
      afterOpen: 'modal-overlay-afterOpen',
      beforeClose: 'modal-overlay-beforeClose'
    },
    'content':{
      base:'modal-content',
      afterOpen: 'modal-content-afterOpen',
      beforeClose: 'modal-content-beforeClose'
    }
  };

  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    styles:PropTypes.object,
    onClose: PropTypes.func
  };

  state = {
    afterOpen:false,
    beforeClose:false
  };

  componentDidMount(){
    if(this.props.isOpen){
      this.open();
    }
  }

  componentWillUnmount(){

  }

  componentWillReceiveProps(newProps){
    if(!this.props.isOpen && newProps.isOpen){
      this.open();
    }else if(this.props.isOpen && !newProps.isOpen){
      this.requestClose();
    }
  }

  componentDidUpdate(){
  }

  requestClose(){
    if(this.props.onClose){
      this.props.onClose();
    }
  }

  open(){
    this.setState({isOpen:true}, function(){
      this.setState({afterOpen: true})
    }.bind(this));
  }

  close(){
    this.setState({beforeClose: true}, function(){
      this.setState({isOpen:false});
    });
  }

  handleOverlayClick(){
    console.log("handleOverlayClick");
    this.requestClose();
  }

  shouldBeClosed(){
    return !this.props.isOpen && !this.state.beforeClose;
  }

  buildClassNames(which){
    let className = this.CLASSNAMES[which]['base'];
    if(!this.shouldBeClosed()){
      className += ' ' + 'visible';
    }else{
      className += ' ' + 'hidden';
    }

    if(this.state.afterOpen){
      className += ' '+ this.CLASSNAMES[which]['afterOpen'];
    }
    else if(this.state.beforeClose){
      className += ' '+ this.CLASSNAMES[which]['beforeClose'];
    }
    return className;
  }

  render(){
    let content = this.shouldBeClosed()? <div/> : this.props.children;
    return (
      <div ref="container" className={this.buildClassNames('container')}>
        <div ref="overlay" className={this.buildClassNames('overlay')} onClick={this.handleOverlayClick.bind(this)}>
        </div>
        <div ref="content" className={this.buildClassNames('content')}>
          {content}
        </div>
      </div>
      )
  }
}

export default Modal;
