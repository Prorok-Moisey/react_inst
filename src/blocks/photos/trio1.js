import React, { Component } from 'react';
import Photo1 from './../../images_container_sq/container1.jpg';
import Photo2 from './../../images_container_sq/container2.jpg';
import Photo3 from './../../images_container_sq/container3.jpg';

class Trio1 extends Component {
  render() {
    return (
        <div className="trio">
          <img className="trio_photo" src={Photo1} />
          <img className="trio_photo" src={Photo2} />
          <img className="trio_photo" src={Photo3} />
        </div>
    );
  }
}

export default Trio1;