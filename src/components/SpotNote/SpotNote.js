
import React, {PropTypes} from 'react';
import styles from './SpotNote.css';
import withStyles from '../../decorators/withStyles';
import SpotNoteActions from '../../actions/SpotNoteActions';

@withStyles(styles)
class SpotNote extends React.Component{

  constructor(){
    super();
    this.showDetails = this.showDetails.bind(this);
  }

  static propTypes = {
    data:PropTypes.object.isRequired
  };

  showDetails(){
    SpotNoteActions.showDetails(this.props.data);
  }

  render(){
    return (
      <div className="ui card" onClick={this.showDetails}>
        <div className="content">
          <div className="right floated meta">14h</div>
          <img className="ui avatar left floated small image" src={this.props.data.createdByImage}/>
          <div className="SpotNote-createdBy">{this.props.data.createdBy}</div>
        </div>
        <div className="image"><img className="SpotNote-Image" src={this.props.data.img}/></div>
        <div className="SpotNote-Content content">
          <div className="SpotNote-Title header">{this.props.data.title}</div>
          <div className="SpotNote-Location meta">{this.props.data.location}</div>
          <div className="SpotNote-Note description">{this.props.data.note}</div>
        </div>
        <div className="SpotNote-Buttons extra content">
            <span className="right floated">
                <i className="comment icon"></i>
              3
              </span>
            <i className="heart outline like icon"></i>
            17 likes

        </div>
      </div>
    )
  }

}

export default SpotNote;
