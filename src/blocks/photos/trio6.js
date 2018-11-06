import React, { Component } from 'react';
import Photo1 from './../../images_container_sq/container16.jpg';
import Photo2 from './../../images_container_sq/container17.jpg';
import Photo3 from './../../images_container_sq/container18.jpg';

class Trio6 extends Component {
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

export default Trio6;