import React, { Component } from 'react';
import styled from 'styled-components'

import Title from './Title';
import Delitel from './Delitel';
import Photos from './Photos';

import Data from './Data.json';

import Posts from './../images/posts.png';
import Tagged from './../images/tagged.png';

const ContainerDiv = styled.div`
	padding-top: 140px;
	font-size: 16px;
	@media(max-width: 736px){
	padding-top:  100px;
	}
`;

/*class Label extends React.Component {
  render() {
    return(
      <div onClick={this.props.supaFunction} style={{border: 1, borderColor: 'black', borderStyle: 'solid'}}>
        {this.props.text}
      </div>
      )
  }
}*/

class Container extends React.Component {
  constructor(props) {
    super(props);
    /*this.loveAndHappiness = this.loveAndHappiness.bind(this);*/
    this.switchMode = this.switchMode.bind(this);
    this.state = {
    /*  count: 1,*/
      mode: 'posts', //tagged
    };
  }

/*  loveAndHappiness() {
    const oldCount = this.state.count;
    this.setState({
      count: oldCount+1
    })
  }*/

  switchMode(newMode) {
    this.setState({
      mode: newMode
    })
  }


  render() {
    const {mode} = this.state;
    const posts = mode === 'posts' ?
      Data.content.posts : Data.content.tagged;
    return (
      <ContainerDiv>
        <Title />
        <Delitel buttons={[
          {image: Posts, text: 'POSTS', isSelected: this.state.mode==='posts', onClick: () => this.switchMode('posts') },
          {image: Tagged, text: 'TAGGED', isSelected: this.state.mode==='tagged', onClick: () => this.switchMode('tagged') },
          ]} />
        <Photos photos={posts} />
      </ContainerDiv>
    )
  }
}

export default Container;
