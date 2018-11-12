import React, { Component } from 'react';
import styled from 'styled-components'

import Posts from './../images/posts.png';
import Tagged from './../images/tagged.png';
import data from './Data';

const PhotoContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	margin:	auto;
	margin-bottom: 20px;
	max-width: 930px; inherit;
`

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
const ContentDiv = styled.div`
`
class Content extends Component {
    
    constructor(props)  {
    	super(props);
    	this.state = {content : 'posts'};
    	this.setContent = this.setContent.bind(this);
  	}
  	
  	setContent(content){
    this.setState({content : content});
  	}

  render() {
  	const {content} = this.state;
    const posts = content === 'publication' ?
    	data.content.posts : data.content.tagged; 
    return (
    	<ContentDiv>
		    <DelitelContainer>
		  		<DelitelBody>
		  			<Element onClick={() => this.setContent('publication')}
		  				active={content === 'publication'}>
		  				<Image src={Posts}/><Text>POSTS</Text></Element>
		  			<Element onClick={() => this.setContent('tagged')}
		  				active={content === 'tagged'}>
		  			<Image src={Tagged}/><Text>TAGGED</Text></Element>
		  		</DelitelBody>
		    </DelitelContainer>
			<PhotoContainer>
				{items.map(function(item){
					return <Photo src={item.url} likes={item.likes} comments={item.comments}/>
				})}
			</PhotoContainer>
    	</ContentDiv>
    );
  }
}

export default Content;
