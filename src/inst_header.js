import React, { Component } from 'react';
import logo1 from './images/inst_logo1.png';
import logo2 from './images/inst_logo2.png';
import x from './images/x.png';
import compas from './images/compas.jpg';
import heart from './images/heart.png';
import man from './images/man.png';
class Header_fixed extends Component {
  render() {
    return (
  <div className="header">
  <div className="header_fixed main_size">

    <div className="header_fixed__logo flex_line">
      <img className="logo1" src={logo1} />
      <img className="logo2" src={logo2} />
    </div>

    <div className="header_fixed__input flex_line" >
      <input type="text" placeholder="Найти" /> <img className="input_image" src={x} />
    </div>

    <div className="header_fixed__icons flex_line">
      <img className="compas" src={compas} />
      <img className="heart" src={heart} />
      <img className="man" src={man} />
    </div>

  </div>
  </div>
    );
  }
}

export default Header_fixed;
