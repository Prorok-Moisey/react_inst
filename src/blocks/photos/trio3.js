import React, { Component } from 'react';
import Photo1 from './../../images_container_sq/container7.jpg';
import Photo2 from './../../images_container_sq/container8.jpg';
import Photo3 from './../../images_container_sq/container9.jpg';

class Trio3 extends Component {
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

export default Trio3;