import React, { Component } from 'react';
import Posts from './delitel/inst_container__delitel__posts';
import Tagged from './delitel/inst_container__delitel__tagged';

class Container_delitel extends Component {
  render() {
    return (
      <div className="delitel_body">
        <div className="delitel">
          <Posts />
          <Tagged />
        </div>
      </div>

    );
  }
}

export default Container_delitel;