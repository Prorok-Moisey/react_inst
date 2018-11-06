import React, { Component } from 'react';
import Container__head__nat_logo from './inst_container__head__nat_logo';
import Container__head__info from './inst_container__head__info.js';
class Container_head extends Component {
  render() {
    return (
      <div class="container__head  main_size">
        <Container__head__nat_logo />
        <Container__head__info />
      </div>
    );
  }
}

export default Container_head;
