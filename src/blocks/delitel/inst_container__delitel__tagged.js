import React, { Component } from 'react';
import Tagg from './../../images/tagged.png';
class Tagged extends Component {
  render() {
    return (
				<div class="delitel_contain">
					<img class="delitel_image" src={Tagg} />
					<span class="delitel_text">TAGGED</span>
				</div>
    );
  }
}

export default Tagged;