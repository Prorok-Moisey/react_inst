import React, { Component } from 'react';
import styled from 'styled-components'

import Title from './Title';
import Delitel from './Delitel';
import Photos from './Photos';

const ContainerDiv = styled.div`
	padding: 140px 0px 0px 0px;
	font-size: 16px;
`
class Container extends Component {

  render() {
    return (
      <ContainerDiv>
        <Title />
        <Delitel />
        <Photos />
      </ContainerDiv>
    )
  }
}

export default Container;
