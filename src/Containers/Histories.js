import React, { Component } from 'react';
import styled from 'styled-components'

import History from '../Components/History';

const HistoriesContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding-top: 50px;
`
const items=[
	{url:'./images/paris.jpg'},
	{url:'./images/korea.jpg'},
	{url:'./images/oaxaca.jpg'},
	{url:'./images/chernobyl.jpg'},
	{url:'./images/best_photo.jpg'},
	];
class Histories extends Component{
	render() {
		return(
			<HistoriesContainer>
				{items.map(function(item){
					return <History src={item.url}/>
				})}
			</HistoriesContainer>
		)
	}
}

export default Histories;