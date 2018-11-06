import React, { Component } from 'react';
import styled from 'styled-components'

const DescriptonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items:flex-start;
	height: 72px;
	line-height: 1.5;
	font-size:16px;
`
const Bold = styled.div`
	font-weight: bold;
	font-style: normal;
	font-size:16px;
	color:black;
`
const Link = styled.a`
	font-size:16px;
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
` 
const Text = styled.div`
	font-size:16px;
	text-align:left;
`

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
