import React, { Component } from 'react';
import Info_top from './inst_container__head__info__top.js'
import Info_links from './inst_container__head__info__links.js'
import Info_description from './inst_container__head__info__description.js'

import Links from '../Containers/Links';

class Container__head__info extends Component {
  render() {
    return (
    	<div className="container__info">
    		<Info_top />
    		<Info_links />
		</div>
    );
  }
}

export default Container__head__info;
