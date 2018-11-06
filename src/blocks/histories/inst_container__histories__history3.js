import React, { Component } from 'react';
import Oaxaca from './../../images/oaxaca.jpg';
class History3 extends Component {
  render() {
    return (
    	<div className="history_block">
			<img className="circle_image history" src={Oaxaca} />
			<p>Oaxaca</p>
		</div>
    );
  }
}

export default History3;