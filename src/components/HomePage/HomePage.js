/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './HomePage.css';
import Banner from '../Banner';
import http from '../../core/HttpClient';
import ContentPage from '../ContentPage';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class HomePage {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let bannerItems = [
      {url:'city.jpg', text:'Never forget your favorite places again.', subtext:"Remember everywhere you've been.", key:1}
    ];
    let title = 'SpotNote';
    this.context.onSetTitle(title);

    return (
      <div className="HomePage">
        <Banner items={ bannerItems }/>
        <ContentPage content ={this.props.content} path={this.props.path} />
      </div>
    );
  }

}

export default HomePage;
