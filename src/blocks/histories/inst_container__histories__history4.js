import React, { Component } from 'react';
import Chernobyl from './../../images/chernobyl.jpg';
class History4 extends Component {
  render() {
    return (
    	<div className="history_block">
			<img className="circle_image history" src={Chernobyl} />
			<p>Chernobyl</p>
		</div>
    );
  }
}

export default History4;