import React, { Component } from 'react';

class Info_description_small extends Component {
  render() {
    return (
        <div className="info_description_small">
          <span className="bold_weight">National Geographic Travel</span>
          <span>It's a big world. Explore it through the lens of our photographers.</span>
          <a className="common_link" href="https://www.nationalgeographic.com">natgeo.com/travel</a>
        </div>
    );
  }
}

export default Info_description_small;