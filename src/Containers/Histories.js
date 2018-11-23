import React, { Component } from 'react';
import styled from 'styled-components'

import History from '../Components/History';

const HistoriesContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding-top: 50px;
	@media(max-width: 736px){
		padding-top: 20px;
	}

`;
const items=[
	{ url : './images/paris.jpg', text : 'Paris' },
	{ url : './images/korea.jpg', text : 'North Korea' },
	{ url : './images/oaxaca.jpg', text : 'Oaxaca' },
	{ url : './images/chernobyl.jpg', text : 'Chernobyl' },
	{ url : './images/best_photo.jpg', text : 'Best Photo' },
	];
class Histories extends Component{
	render() {
		return(
			<HistoriesContainer>
				{items.map(function(item){
					return <History src={item.url} text={item.text}/>
				})}
			</HistoriesContainer>
		)
	}
}

export default Histories;