
import React, {PropTypes} from 'react';
import styles from './SpotNoteDetails.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class SpotNoteDetails extends React.Component{

  static propTypes = {
    spotNote: PropTypes.object.isRequired
  }

  constructor(){
    super();
  }

  render(){
    return (
      <div className="ui">
        <div className="SpotNoteDetailsContent">
          <div>
            <h3 className="SpotNoteDetailsTitle"> {this.props.spotNote.title} </h3>
            <div className="SpotNoteDetailsLocation"><i className="marker icon"></i>{this.props.spotNote.location}</div>
            <img className="SpotNoteDetails-Image" src={this.props.spotNote.img}/>
          </div>
          <div className="SpotNoteDetailsMessage"> { this.props.spotNote.note }</div>
        </div>
        <div className="SpotNoteDetails-Buttons">
            <span className="right floated">
                <i className="comment icon"></i>
              3
              </span>
          <i className="heart outline like icon"></i>
          17 likes

        </div>
      </div>
    );
  }

}


export default SpotNoteDetails;
