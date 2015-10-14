
import React, { PropTypes } from 'react';
import styles from './Banner.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Banner {

	static propTypes = {
		items: PropTypes.array.isRequired
	};

	render() {
		let bannerItems = this.props.items.map(item => {
			return(
				<div className="Banner-item" key={item.key}>
					<div className="Banner-text">
						{item.text}
						<div className="Banner-subtext">{item.subtext}</div>
            <button className="Banner-joinBetaButton ui inverted button">Join beta</button>
					</div>
          <div className="Banner-mobile"></div>
				</div>
			);
		});
		return (
			<div className="Banner-container"><div className="Banner-overlay"></div> {bannerItems} </div>
		);
	}

}

export default Banner;
