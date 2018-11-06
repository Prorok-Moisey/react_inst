import React, { Component } from 'react';
import star from './../images/star.jpg';

class Info_top extends Component {
  render() {
    return (
		<div className="info_top">
			<h1 className="inline normal_weight">natgeotravel</h1>
			<img src={star} />
				<button className="follow">Follow</button>
				<button className="triangle">&#9660;</button>
			<button className="points">...</button>
		</div>
    );
  }
}

export default Info_top;

