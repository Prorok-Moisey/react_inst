import React, { Component } from 'react';
import styled from 'styled-components'
import StarImg from './../images/star.jpg';
const Star = styled.img`
	width:15px;
	height:15px;
	padding:0px 20px 0px 6px;
`

const Name = styled.div`
	font-style: normal;
	font-size: 32px;
	color: #000000;
`

const Button = styled.button`
	height: 28px;
	color:white;
	font-size: 14px;
	font-weight: bold;
	background-color: #3897f0;
	border:none;
	border-radius: 3px;
	margin-right: 10px;
`
const Text = styled.div`
`


const Points = styled.button`
	height:28px;
	color:black;
	background-color:#fafafa;
	font-size: 18px;
	font-weight: bold;
	border:none;
`

const ControlContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items:center;
	width:350px;
`

export default class Control extends Component {
	render() {
		return(
			<ControlContainer>
				<Name>natgeotravel</Name>
				<Star src = {StarImg} />
				<Button>Follow</Button>
				<Points>...</Points>
			</ControlContainer>
		)
	}
}

