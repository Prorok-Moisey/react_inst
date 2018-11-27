import React, { Component } from 'react';
import styled from 'styled-components'

import LogoImage1 from './../images/inst_logo1.png';
import LogoImage2 from './../images/inst_logo2.png';
import Icon1 from './../images/compas.jpg';
import Icon2 from './../images/heart.png';
import Icon3 from './../images/man.png';
import Loop from './../images/loopa.png';
import Krestik from './../images/x.png';


const HeaderFixedContainer = styled.div`
	position: fixed;
	top: 0;
	width: 100vw;
	background-color: #ffffff;
	border-bottom: 1px solid #e6e6e6;
	transition: all 0.4s;
`;
const Fixed = styled.div`
	max-width: 930px;
	margin:auto;
	display:flex;
	flex-direction: row;
	height: 40px;
	padding: ${props => props.mode ? '20px 40px' : '5px 40px'};
	//padding: 0px 40px 0px 40px;
	transition: all 0.5s;	
`;
const LogoContainer = styled.div`
	justify-content: flex-start;
	display: flex;
	align-items: center;
	flex-grow: 1;
`;
const Logo1 = styled.img`
	padding-right: 20px;
	cursor: pointer;

`;

const Logo2 = styled.img`
	padding-left: 15px;
	border-left: 1px solid black;
	transition: all 0.4s;
	cursor: pointer;
`;
const InputContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	flex-grow: 1;
`;
const Input = styled.input`
	height: 28px; 
	width:215px;
	font-size: 14px;
	border: 1px solid #e6e6e6;
	outline: none;
	background-image: url(${Loop});
	background-repeat: no-repeat;
	padding-left: 30px;
	background-position-y: 50%;
	background-position-x: 40%;
	text-align: ${props => props.mode? 'left' : 'center'};
`;
const X = styled.img`
	display: ${props => props.mode ? 'block' : 'none'};
	position: absolute;
	left: 220px;
	filter: opacity(0.25);
	pointer-events: none;
	cursor: pointer;
`;
const IconContainer = styled.div`
	justify-content: space-between;
	max-width:140px;
	min-width:140px;
	display: flex;
	align-items: center;
	flex-grow: 1; 
`;
const Icon = styled.img`
	cursor: pointer;
`;
const Element = styled.div`
	display:flex;
	align-items:center;
	margin: 0px 30px 0px 30px;
`;
const Text = styled.div`
`;

function changeAdress(arg){
	window.location = arg;
}

class HeaderFixed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scrolled: true,
			input: '',
			focus: false,
		};
	}

	onChangeHandler = (e) =>{
		this.setState({
			input: e.currentTarget.value
		});
	};

	_blur = (e) => {
		e.currentTarget.value = '';
		this.setState({focus: false});
	};

	_focus = (e) =>{
		e.currentTarget.value = this.state.input;
        this.setState({focus: true});
    };

	clear = (e) => {
        let target  = e.target || e.srcElement,
            rect = target.getBoundingClientRect(),
            offsetX = e.clientX - rect.left
		if (offsetX > 220) {
			this.setState({input: ''});
			e.currentTarget.blur();
		}
	};

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}
	handleScroll = () => {
        this.setState({scrolled: window.pageYOffset === 0});
	};

    render() {
		return (
			<HeaderFixedContainer>
				<Fixed mode = {this.state.scrolled}>
					<LogoContainer>
						<Logo1 src={LogoImage1}
                               onClick={()=> changeAdress('https://www.instagram.com/')}/>
						<Logo2 src={LogoImage2}
                               onClick={()=> changeAdress('https://www.instagram.com/')}/>
					</LogoContainer>
					<InputContainer>
						<Input mode = {this.state.focus}
							   onChange = {(event) => this.onChangeHandler(event)}
							   onClick = {(event) => this.clear(event)}
							   value = {this.state.focus?
								   this.state.input
								   : ''}
							   placeholder = {this.state.input === '' ?
								"Найти" :
								this.state.input
							   }
							   onBlur = {(event) => this._blur(event)}
							   onFocus = {(event) => this._focus(event)}
						 />
						<X src={Krestik} mode = {this.state.focus} />
					</InputContainer>
					<IconContainer>
						<Icon src={Icon1} onClick={()=> changeAdress('https://www.instagram.com/explore/')}/>
						<Icon src={Icon2} />
						<Icon src={Icon3} />
					</IconContainer>
			</Fixed>
		  </HeaderFixedContainer>
		);
	}
}

export default HeaderFixed;
