

import React, { PropTypes } from 'react';
import styles from './Search.css'
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Search {

  static propTypes ={

  }

  render(){
    return (
      <div className="Search-Container">
       <div className="ui icon input">
         <input className="Search-inputText " placeholder="Search for people, places, things"/>
         <i className="search icon"></i>
       </div>
      </div>
    );
  }


}

export default Search;
