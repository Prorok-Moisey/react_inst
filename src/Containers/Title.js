import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container__head from '../blocks/inst_container__head';
import Container__histories from '../blocks/inst_container__histories';
import Info_description_small from '../blocks/info_description_small';
import Info_links_small from '../blocks/info_links_small';

import Avatar from '../Components/Avatar';
import Control from './Control';
import Links from './Links';
import Histories from './Histories';
import Description from './Description';

import nat_logo from './../images/nat_logo.jpg';

const TitleContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	max-width: 930px;
	padding-left:30px;
	margin: auto;
`

const AvatarContainer = styled.div`
	display:flex;
	flex-grow:1;
	padding-left: 50px;
	min-width: 200px;
	@media(max-width: 720px){
		min-width:100px;
		max-width:100px;
		padding-left:0px;
	}
`

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	height: 170px;	
	flex-grow:2;
`

class Title extends Component {

	render() {


		return(
			<TitleContainer>
				<AvatarContainer>
		        	<Avatar src={nat_logo} />
		        </AvatarContainer>
		        <InfoContainer>
		        	<Control />
    				<Links posts={9.187} followers={"25.7m"} following={73} />
    				<Description />
		        </InfoContainer>
		        <Histories />
			</TitleContainer>
		)
	}
}

Title.defaultProps = {
	small: false
};

export default Title;