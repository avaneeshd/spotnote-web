
import React, { PropTypes } from 'react';
import styles from './GridLayout.css'
import withStyles from '../../decorators/withStyles'
import SpotNote from '../SpotNote';
@withStyles(styles)
class GridLayout {

  static propTypes = {
    cols: PropTypes.string.isRequired,
    spotnotes: PropTypes.array.isRequired
  };

  render(){
    let spotNotes = [];

    for(let i=0; i<this.props.spotnotes.length; i++){
      let spotnote = this.props.spotnotes[i];
      spotNotes.push(<div className="column"><SpotNote  key={spotnote.key} data={spotnote}/></div>);
    }

    let className = "GridContainer-layout ui " + this.props.cols + " column stackable grid container";
    return (
        <div className={className}>
          {spotNotes}
        </div>
    )
  }
}

export default GridLayout;
