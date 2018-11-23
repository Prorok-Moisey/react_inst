import React, { Component } from 'react';
import styled from 'styled-components'

const InfoMain = styled.div`
	display: flex;
	@media(max-width: 736px){
		flex-direction: column;
	}
`;

const InfoNumber = styled.div`
	font-weight: bold;
	font-style: normal;
	color: #000000;
`;

const InfoText = styled.div`
	@media(max-width: 736px){
		color: #999999;
	}
`;

function Info(props) {
	return (
		<InfoMain>
			<InfoNumber>{props.count}</InfoNumber>
			<InfoText>&nbsp;{props.text}</InfoText>
		</InfoMain>
	)
}

const LinksContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	width:350px;
	@media(max-width: 736px){
		width: 100%;
		height: 60px;
		font-size: 14px;
		justify-content: space-around;
		align-items: center;
		border-top:1px solid #e6e6e6;
	}
`;

export default class Links extends Component {
	render() {
		return(
			<LinksContainer>
				<Info count={this.props.posts} text="posts" />
				<Info count={this.props.followers} text="followers" />
				<Info count={this.props.following} text="following" />
			</LinksContainer>
		)
	}
}

