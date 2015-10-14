import React, { PropTypes } from 'react';
import styles from './Logo.css';
import withStyles from '../../decorators/withStyles'

@withStyles(styles)
class Logo {

	static propTypes = {
		firstHalf: PropTypes.string.isRequired,
		secondHalf: PropTypes.string.isRequired
	};

	render() {
		return (
			<span className="Logo-container">
        <img className="Logo-appName" src={require('./spotnote.png')}
             alt={this.props.firstHalf+this.props.secondHalf}/>
				<img className="Logo-img Logo-floating" src={require('./logo-small.png')}
					 alt={this.props.firstHalf+this.props.secondHalf}/>
			</span>
		)
	}
}

export default Logo;
