import React, {Component} from 'react';
import styled from 'styled-components';
import Photo from './../Components/Photo';

const PhotoContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	margin:	auto;
	padding: 0px 20px 0px 20px;
	margin-bottom: 20px;
	max-width: 930px; inherit;
	@media(max-width: 736px){
	padding: 0px;
	}
\`;
`;

class Photos extends Component{
	render() {
		return(
			<PhotoContainer>
				{
					this.props.photos.map(function(item){
						return <Photo src={item.url} likes={item.likes} comments={item.comments}/>
					})
				}
			</PhotoContainer>
		)
	}
}
export default Photos;
