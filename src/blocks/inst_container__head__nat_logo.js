import React, { Component } from 'react';
import nat_logo from './../images/nat_logo.jpg';

class Container__head__nat_logo extends Component {
  render() {
    return (
    	<div className="nat_logo_flex">
			<img className="nat_logo_image circle_image" src={nat_logo} />
		</div>
    );
  }
}

export default Container__head__nat_logo;
