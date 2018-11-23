import React, {Component} from 'react';
import styled from 'styled-components';
import Dialog from './../images/white_dialog.png';
import Heart from './../images/white_heart.png';

const PhotoContainer = styled.div`
	display: flex;
	position: relative;
	min-width: 31%;
	max-width: 31%;	
	margin-bottom: 3.5%;
	cursor: pointer;
	@media(max-width:736px){
		min-width: 32.5%;
		max-width: 32.5%;
		margin-bottom: 1%;
	}		
`;
const PhotoImg = styled.img`
	min-width: 100%;
	max-width: 100%;
	transition: filter 0.5s;
	
`;
const Middle = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0px;
	left: 0px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: white;
	font-weight: bolder;
	font-size: 16px;

	transition: all 0.3s;
	opacity: 0;
	&:hover{
		opacity: 1;
		background-color: rgba(0,0,0,0.5);
		transition: all 0.3s; 
	}
	@media(max-width:600px){
		flex-direction: column;
	}
`;
const Img = styled.img`
	height: 20px;
	width: 20px;

`;
const Likes = styled.div`
	@media(min-width:600px){
		margin-right: 10%;
	}
`;
const Comments = styled.div`
`;
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
