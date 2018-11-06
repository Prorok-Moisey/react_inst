import React, { Component } from 'react';
import styled from 'styled-components'

import Posts from './../images/posts.png';
import Tagged from './../images/tagged.png';


const DelitelContainer = styled.div`
	margin: auto;
	padding: 30px 20px 0px 20px;
	max-width: 930px;
	@media(max-width: 720px) {
		padding:0px;
	}
`
const DelitelBody = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	border-top:1px solid #e6e6e6;
	font-size: 12px;
	font-weight: bold;
`
const Image = styled.img`
	margin-right: 7px;
	height: 13px;
	width: 13px;
`
const Element = styled.div`
	display:flex;
	align-items:center;
	margin: 0px 30px 0px 30px;
`
const Text = styled.div`
`

class Delitel extends Component {
  
  render() {
    return (
      <DelitelContainer>
  		<DelitelBody>
  			<Element><Image src={Posts}/><Text>POSTS</Text></Element>
  			<Element><Image src={Tagged}/><Text>TAGGED</Text></Element>
  		</DelitelBody>
      </DelitelContainer>
    );
  }
}

export default Delitel;
