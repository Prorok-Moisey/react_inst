import React, { Component } from 'react';
import styled from 'styled-components'

const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
`

const Logo = styled.img`
	float:left;
	border: 1px solid #e6e6e6;
	border-radius: 100px;
	@media(max-width: 720px){
		width: 77px;
		height: 77px;
	}
`

class Avatar extends Component {
	render() {
		return(
			<LogoContainer>
				<Logo src={this.props.src} />
			</LogoContainer>
		)
	}
}

export default Avatar;