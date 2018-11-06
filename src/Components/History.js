import React, { Component } from 'react';
import styled from 'styled-components'

const HistoryContainer = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	height: 130px;
	width: 130px;
	font-size: 14px;
	font-weight: bold;
	@media(max-width: 720px){
		font-size: 12px;
		font-weight: normal;
		text-align: center;
		width: 75px;
		height: 96px;
	}
`
const Image  = styled.img`
	height: 76px;
	width: 76px;
	border: 1px solid #e6e6e6;
	border-radius: 100px;
	@media(max-width: 720px){
		width: 56px;
		height: 56px;
	}
`
const InfoText = styled.div`
padding-top:10px;
`
function Info(props){
	return(
		<InfoText>{props.text}</InfoText>
	)
}

class History extends Component {
	render() {
		return(
			<HistoryContainer>
				<Image src={this.props.src} />
				<Info text={this.props.text} />
			</HistoryContainer>
		)
	}
}

export default History;