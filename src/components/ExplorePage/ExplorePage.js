
import React, { PropTypes } from 'react';
import styles from './ExplorePage.css';
import withStyles from '../../decorators/withStyles';
import GridLayout from '../GridLayout';
import Parse from 'parse/node';
import ParseReact from 'parse-react';
import spotNoteStore from '../../stores/SpotNoteStore';
import spotNoteActions from '../../actions/SpotNoteActions';
import SpotNoteDetailsContainer from '../SpotNoteDetailsContainer';

@withStyles(styles)
class ExplorePage extends React.Component{
  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired
  };

  constructor(){
    super();
    this.render = this.render.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = getSpotNoteState();
    spotNoteActions.fetch();
  }

  componentDidMount(){
    spotNoteStore.addChangeListener(this.onChange)
  }

  componentWillUnmount(){
    spotNoteStore.removeChangeListener(this.onChange)
  }

  onChange(){
    console.log("Change");
    this.setState(getSpotNoteState());
    console.log(this.state);
  }

  render() {
    let title = 'Explore';
    this.context.onSetTitle(title);
    let showModal = this.state.currentSpotNote !== null ? 'show' :'hide'
    return (
      <div className="ExplorePage">
        <div className="ExplorePage-container">
          <h1>{title}</h1>
          <GridLayout cols={"three"} spotnotes={this.state.allSpotNotes}/>
          <SpotNoteDetailsContainer spotnote={this.state.currentSpotNote} show={showModal}/>
        </div>
      </div>
    );
  }

}

function getSpotNoteState(){
  return {
    allSpotNotes: spotNoteStore.getAll(),
    currentSpotNote: spotNoteStore.getCurrentSpotNote()
  };
}


export default ExplorePage;

