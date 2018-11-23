import React, { Component } from 'react';
import styled from 'styled-components'

const DelitelContainer = styled.div`
	margin: auto;
	padding: 30px 20px 0px 20px;
	max-width: 930px;
	@media(max-width: 736px) {
		padding:0px;
	}
`;
const DelitelBody = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	border-top:1px solid #e6e6e6;
	font-size: 12px;
	font-weight: bold;
`;
const Image = styled.img`
	margin-right: 7px;
	height: 13px;
	width: 13px;
	filter: ${props => props.isSelected === true ? "brightness(0%)" : "brightness(100%)"};
    @media(max-width: 736px){
	  width: 26px;
	  height: 26px;
	}
`;
const Element = styled.div`
	display:flex;
	align-items:center;
	margin: 0px 30px 0px 30px;
	height:100%;
	cursor: pointer;
	border-top:${props => props.isSelected === true ? "1px solid black" : "none"};
	@media(max-width: 736px){
	  border-top: none;
	  width: 50%;
	  justify-content: center;
	}`;
const Text = styled.div`
	font-size: 12px;
	font-weight: bold;
	filter:${props => props.isSelected === true ? "opacity(1)" : "opacity(0.5)"};
	@media(max-width: 736px){
	  display: none;
	}
`;

class Delitel extends Component {
    
    constructor(props) {
    super(props);
    this.state = '1';
  }

  render() {
  	const {isSelected} = this.state;
    return (
      <DelitelContainer>
  		<DelitelBody>
  			{
  				this.props.buttons.map((loneliness) => {
  					return (<Element isSelected = {loneliness.isSelected} onClick={loneliness.onClick}>
  						<Image isSelected = {loneliness.isSelected} src={loneliness.image}/>
  						<Text isSelected = {loneliness.isSelected} >{loneliness.text}</Text></Element>);
  				})
  			}
  			</DelitelBody>
      </DelitelContainer>
    );
  }
}

export default Delitel;
