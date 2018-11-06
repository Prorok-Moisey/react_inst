import React, {Component} from 'react';
import styled from 'styled-components';

const PhotoContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	min-width: 31%;
	max-width: 31%;	

	height: same-as-width;
	
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
	background: url(${props => props.src}) no-repeat;
	background-size: cover;

`
const Likes = styled.div`	
`
const Comments = styled.div`
`
class Photo extends Component{
	render() {
		return(
			<PhotoContainer src={this.props.src}>
				<Likes>{this.props.likes}</Likes>
				<Comments>{this.props.comments}</Comments>
			</PhotoContainer>
		)
	}
}
export default Photo;
