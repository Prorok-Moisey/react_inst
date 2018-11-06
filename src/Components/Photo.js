import React, {Component} from 'react';
import styled from 'styled-components';
import Dialog from './../images/white_dialog.png';
import Heart from './../images/white_heart.png';

const PhotoContainer = styled.div`
	position: relative;
	min-width: 31%;
	max-width: 31%;	
	margin-bottom: 3.5%;
	@media(max-width:720px){
	min-width: 32.5%;
	max-width: 32.5%;
	margin-bottom: 0.5%;
	}
	@media(max-width:400px){
	max-width: 32.5%;
	min-width: 32.5%;
	margin-bottom: 0%;
	}
`
const PhotoImg = styled.img`
	min-width: 100%;
	max-width: 100%;
	transition: filter 0.5s;
	filter: brightness(100%);
	&:hover{
		transition: filter 0.5s;
		filter: brightness(50%);
	}	
`
const Middle = styled.div`
	position: absolute;
	top: 45%;
	left: 25%;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	width: 50%;
	color: white;
	font-weight: bolder;
	font-size: 16px;
	@media(max-width:650px){
		width:80px;
		top: 35%;
		left: 35%;
	}
	@media(max-width:400px){
		width:80px;
		top: 25%;
		left: 25%;
	}
	transition: filter 0.5s;
	filter: opacity(0%);
	&:hover{
		transition: filter 0.5s;
		filter: opacity(100%);
	}
`
const Img = styled.img`
	height: 20px;
	width: 20px;
`
const Likes = styled.div`	
`
const Comments = styled.div`
`
class Photo extends Component{
	render() {
		return(
			<PhotoContainer>
				<PhotoImg src={this.props.src} />
				<Middle>
					<Likes><Img src={Heart}/>{this.props.likes}</Likes>
					<Comments><Img src={Dialog}/>{this.props.comments}</Comments>
				</Middle>
			</PhotoContainer>
		)
	}
}
export default Photo;
