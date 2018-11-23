import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import sizeMe from "react-sizeme"

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
	@media(max-width:736px){
		padding-left: 15px;
	}
`;

const AvatarContainer = styled.div`
	display:flex;
	justify-content: center;
	flex-grow: 1;
	min-width: 190px;
	@media(max-width: 736px){
		justify-content: flex-start;
		min-width: 110px;
		flex-grow: 0;
		padding-left:0px;
	}
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	height: 170px;	
	flex-grow:2;
	padding-left: 40px;
`;
const Top = styled.div`
	display: flex;
	flex-direction: row;
	min-width:250px;
`;
class Title extends Component {

	render() {
			const {width} = this.props.size;

			const toRender = width > 720 ?
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
				:
				<TitleContainer>
					<Top>
						<AvatarContainer>
							<Avatar src={nat_logo} />
						</AvatarContainer>
						<Control />
					</Top>
						<Description />
					<Histories />
                    <Links posts={9.187} followers={"25.7m"} following={73} />
				</TitleContainer>
		return(
			<div>
				{toRender}
			</div>
				)
	}
}

Title.defaultProps = {
	small: false
};

export default sizeMe()(Title);