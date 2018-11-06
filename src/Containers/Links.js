import React, { Component } from 'react';
import styled from 'styled-components'

const InfoMain = styled.div`
	display: flex;
`

const InfoNumber = styled.div`
	font-weight: bold;
	font-style: normal;
	color: #000000;
`

const InfoText = styled.div`
`

function Info(props) {
	return (
		<InfoMain>
			<InfoNumber>{props.count}</InfoNumber>
			<div>&nbsp;</div>
			<InfoText>{props.text}</InfoText>
		</InfoMain>
	)
}

const LinksContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	width:350px;
`

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

