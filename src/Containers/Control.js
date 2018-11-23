import React, { Component } from 'react';
import styled from 'styled-components'
import StarImg from './../images/star.jpg';

const Star = styled.img`
	width:15px;
	height:15px;
	padding:0px 20px 0px 6px;
	@media(max-width: 736px){
		padding:0px 6px 0px 6px;
	}
`;

const Name = styled.div`
	display: inline-block;
	font-style: normal;
	font-size: 32px;
	color: #000000;
	@media(max-width: 736px){
		font-size: 22px;
		text-overflow: ellipsis;
	}
`;

const Button = styled.button`
	height: 28px;
	color:white;
	font-size: 14px;
	font-weight: bold;
	background-color: #3897f0;
	border:none;
	border-radius: 3px;
	margin-right: 10px;
	cursor: pointer;
	width: ${props => props.buttonWidth};
	@media(max-width: 736px){
		order: 1;
	}
`;

const Text = styled.div`
`;

const Points = styled.button`
	height:28px;
	color:black;
	background-color:#fafafa;
	font-size: 18px;
	font-weight: bold;
	border:none;
	cursor: pointer;
`;

const ControlContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items:center;
	width:350px;
	@media(max-width: 736px){
		flex-flow: row wrap;
	}
`;

export default class Control extends Component {
	render() {
		return(
			<ControlContainer>
				<Name>natgeotravel</Name>
				<Star src = {StarImg} />
				<Button buttonWidth="75%">Follow</Button>
				<Points>...</Points>
			</ControlContainer>
		)
	}
}

