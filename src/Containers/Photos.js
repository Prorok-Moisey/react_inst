import React, {Component} from 'react';
import styled from 'styled-components';
import Photo from './../Components/Photo';

const PhotoContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	margin:	auto;
	margin-bottom: 20px;
	max-width: 930px; inherit;
`

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
