import React, { Component } from 'react';
import History1 from './histories/inst_container__histories__history1';
import History2 from './histories/inst_container__histories__history2';
import History3 from './histories/inst_container__histories__history3';
import History4 from './histories/inst_container__histories__history4';
import History5 from './histories/inst_container__histories__history5';

class Container_histories extends Component {
  render() {
    return (
      <div className="histories main_size">
        <History1 />
        <History2 />
        <History3 />
        <History4 />
        <History5 />
      </div>
    );
  }
}

export default Container_histories;
