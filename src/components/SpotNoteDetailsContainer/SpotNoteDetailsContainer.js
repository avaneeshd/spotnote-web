
import React, {PropTypes} from 'react';
import styles from './SpotNoteDetailsContainer.css';
import withStyles from '../../decorators/withStyles';
import Modal from '../Modal';
import SpotNoteDetails from '../SpotNoteDetails';
import SpotNoteActions from '../../actions/SpotNoteActions'
@withStyles(styles)
class SpotNoteDetailsContainer extends React.Component{

  state= {
    isShow: false
  };

  constructor(){
    super();
  }

  static propTypes = {
    spotnote: PropTypes.object
  };

  componentDidMount(){
  };

  componentWillReceiveProps(nextProps){
    if(nextProps.spotnote != null) {
      this.setState({isShow:true});
    }
  }

  onClose(){
    this.setState({isShow: false});
    SpotNoteActions.showDetails(null);
  };

  shouldShowModal(){
     return this.props.spotnote !== null;
  };
  handleClick(event){
    event.stopPropagation();
  };

  render(){
    return (
      <Modal className="SpotNoteDetailsModal" isOpen={this.state.isShow} onClose={this.onClose.bind(this)} >
        <div className="ui" onClick={this.handleClick}>
          <div className="ui divided stackable grid container">
            <div className="row">
              <div className="eight wide column no-padding"><SpotNoteDetails spotNote={this.props.spotnote}/></div>
              <div className="eight wide column no-padding SpotNoteDetailsContainerExtra"></div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default SpotNoteDetailsContainer;


