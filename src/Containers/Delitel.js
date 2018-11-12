import React, { Component } from 'react';
import styled from 'styled-components'




const DelitelContainer = styled.div`
	margin: auto;
	padding: 30px 20px 0px 20px;
	max-width: 930px;
	@media(max-width: 720px) {
		padding:0px;
	}
`
const DelitelBody = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	border-top:1px solid #e6e6e6;
	font-size: 12px;
	font-weight: bold;
`
const Image = styled.img`
	margin-right: 7px;
	height: 13px;
	width: 13px;
	filter: ${props => props.selected === true ? "brightness(0%)" : "brightness(100%)"};
`
const Element = styled.div`
	display:flex;
	align-items:center;
	margin: 0px 30px 0px 30px;
	height:100%;
	border-top:${props => props.selected === true? "1px solid black" : "none"};
`
const Text = styled.div`
	font-size: 12px;
	font-weight: bold;
	filter:${props => props.selected === true ? "opacity(1)" : "opacity(0.5)"};
`

class Delitel extends Component {
    
    constructor(props) {
    super(props);
    this.state = '1';
  }

  render() {
  	const {select} = this.state; 
    return (
      <DelitelContainer>
  		<DelitelBody>
  			{
  				this.props.buttons.map(function(loneliness) {
  					return (<Element (select === '1' ? selected : def) onClick={loneliness.onClick}>
  						<Image  selected = {select === '1'} src={loneliness.image}/>
  						<Text  selected = {select === '1'}>{loneliness.text}</Text></Element>);
  				})
  			}
  		</DelitelBody>
      </DelitelContainer>
    );
  }
}

export default Delitel;
