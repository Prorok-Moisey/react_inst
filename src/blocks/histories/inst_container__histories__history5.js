import React, { Component } from 'react';
import Best from './../../images/best_photo.jpg';
class History5 extends Component {
  render() {
    return (
    	<div className="history_block">
			<img className="circle_image history" src={Best} />
			<p>Best Phot...</p>
		</div>
    );
  }
}

export default History5;