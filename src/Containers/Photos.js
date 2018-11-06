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

const items=[
	{url:'./images_container_sq/container1.jpg', likes:'133k', comments:'220'},
	{url:'./images_container_sq/container2.jpg', likes:'80k', comments:'820'},
	{url:'./images_container_sq/container3.jpg', likes:'121k', comments:'320'},
	{url:'./images_container_sq/container4.jpg', likes:'32k', comments:'260'},
	{url:'./images_container_sq/container5.jpg', likes:'101k', comments:'563'},
	{url:'./images_container_sq/container6.jpg', likes:'96k', comments:'365'},
	{url:'./images_container_sq/container7.jpg', likes:'74k', comments:'356'},
	{url:'./images_container_sq/container8.jpg', likes:'65k', comments:'752'},
	{url:'./images_container_sq/container9.jpg', likes:'88k', comments:'356'},
	{url:'./images_container_sq/container10.jpg', likes:'90k', comments:'134'},
	{url:'./images_container_sq/container11.jpg', likes:'126k', comments:'456'},
	{url:'./images_container_sq/container12.jpg', likes:'86k', comments:'467'},
	{url:'./images_container_sq/container13.jpg', likes:'78k', comments:'136'},
	{url:'./images_container_sq/container14.jpg', likes:'99k', comments:'775'},
	{url:'./images_container_sq/container15.jpg', likes:'58k', comments:'894'},
	{url:'./images_container_sq/container16.jpg', likes:'84k', comments:'145'},
	{url:'./images_container_sq/container17.jpg', likes:'72k', comments:'247'},
	{url:'./images_container_sq/container18.jpg', likes:'80k', comments:'675'},
	];

class Photos extends Component{
	render() {
		return(
			<PhotoContainer>
				{items.map(function(item){
					return <Photo src={item.url} likes={item.likes} comments={item.comments}/>
				})}
			</PhotoContainer>
		)
	}
}
export default Photos;
