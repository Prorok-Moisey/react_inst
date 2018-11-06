import React, { Component } from 'react';
import Paris from './../../images/paris.jpg';
class History1 extends Component {
  render() {
    return (
    	<div className="history_block">
			<img className="circle_image history" src={Paris} />
			<p>Paris is C...</p>
		</div>
    );
  }
}

export default History1;

