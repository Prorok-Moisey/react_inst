import React, { Component } from 'react';
import styled from 'styled-components'

const DescriptonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items:flex-start;
	height: 72px;
	line-height: 1.5;
	font-size:16px;
	@media(max-width: 736px){
		/*	min-width: 140px*/
		font-size:14px;
		padding-top: 20px;
	}
`;
const Bold = styled.div`
	font-weight: bold;
	font-style: normal;
	color:black;
`;
const Link = styled.a`
	font-weight: bold;
	&:link{
		text-decoration: none;
		color: #073b69;
	}
	&:hover{
		text-decoration: none;
		color: #073b69;
	}
	&:visited{
		text-decoration: none;
		color: #073b69;
`;
const Text = styled.div`
	text-align:left;
`;

class Descripton extends Component {
	render() {
		return(
			<DescriptonContainer>
				<Bold>National Geographic Travel</Bold>
				<Text>It's a big world. Explore it through the lens of our photographers.</Text>
				<Link href="https://www.nationalgeographic.com">natgeo.com/travel</Link>
			</DescriptonContainer>
		)
	}
}

export default Descripton;
