import React, { Component } from 'react';
import Trio1 from './photos/trio1';
import Trio2 from './photos/trio2';
import Trio3 from './photos/trio3';
import Trio4 from './photos/trio4';
import Trio5 from './photos/trio5';
import Trio6 from './photos/trio6';

class Container_delitel extends Component {
  render() {
    return (
        <div className="photos">
          <Trio1 />
          <Trio2 />
          <Trio3 />
          <Trio4 />
          <Trio5 />
          <Trio6 />
        </div>
    );
  }
}

export default Container_delitel;