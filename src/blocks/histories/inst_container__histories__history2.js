import React, { Component } from 'react';
import Korea from './../../images/korea.jpg';
class History2 extends Component {
  render() {
    return (
    	<div className="history_block">
			<img className="circle_image history" src={Korea} />
			<p>North Korea</p>
		</div>
    );
  }
}

export default History2;