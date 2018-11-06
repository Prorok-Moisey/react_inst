import React, { Component } from 'react';
import styled from 'styled-components'

const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 12px;
	font-weight: bold;
	padding: 0px 20px 40px 50px;
	max-width: 930px;
	margin:auto;
	justify-content:flex-start;
	align-items:flex-start;
	@media(max-width: 720px){
		align-items:center;
	}

`
const LinkContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	word-spacing: 10px;
	line-height: 2;
	@media(max-width: 720px){
		justify-content:center;
	}
`
const Link = styled.a`
	font-size:12px;
	font-weight: bold;
	padding-right:10px;
	&:link{
		text-decoration: none;
		color: #073b69;
	}
	&:hover{
		text-decoration: none;
		color: #073b69;
	}
	&:visited{
		text-decoration: none;
		color: #073b69;
` 
const Copy = styled.div`
	color: #a5999c;
	margin-top:10px;
	margin-bottom:10px;
`

class Footer extends Component {
	render() {
		return(
			<FooterContainer>
				<LinkContainer>
					<Link target="_blank" href="https://www.instagram.com/about/us/">ABOUT AS</Link>
					<Link target="_blank" href="https://help.instagram.com">SUPPORT</Link>
					<Link target="_blank" href="https://instagram-press.com">PRESS</Link>
					<Link target="_blank" href="https://www.instagram.com/developer/">API</Link>
					<Link target="_blank" href="https://www.instagram.com/about/jobs/">JOBS</Link>
					<Link target="_blank" href="https://www.instagram.com/legal/privacy/">PRIVACY</Link>
					<Link target="_blank" href="https://www.instagram.com/legal/terms/">TERMS</Link>
					<Link target="_blank" href="https://www.instagram.com/explore/locations/">DIRECTOTY</Link>
					<Link target="_blank" href="https://www.instagram.com/directory/suggested/natgeotravel">SUGGESTED PROFILES</Link>
					<Link target="_blank" href="https://www.instagram.com/directory/hashtags/">HASHTAGS</Link>
					<Link target="_blank">LANGUAGE</Link>
				</LinkContainer>
				<Copy>&copy;2018 INSTAGRAM</Copy>
			</FooterContainer>
		)
	}
}

export default Footer;
