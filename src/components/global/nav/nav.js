import React, { Component } from 'react';

import './nav.css';
import { Navbar, NavItem } from 'react-materialize';

// import logo from '../../assets/logo1.png';

class Nav extends Component {
	render() {
		return (
			<Navbar brand={
				<p className = 'text-nav'>Mirian García</p>
				} 
				left className = 'amber blue-grey-text text-darken-3'>
				{/* <ul id = 'nav-mobile' > */}
					<NavItem>
						<a className = 'blue-grey-text text-darken-3 text-nav' href='badges.html'>Acerca de Mí</a>
					</NavItem>
					<NavItem>
						<a className = 'blue-grey-text text-darken-3 text-nav' href='badges.html'>Portafolio</a>
					</NavItem>
					<NavItem>
						<a className = 'blue-grey-text text-darken-3 text-nav' href='collapsible.html'>Contacto</a>
					</NavItem>
				{/* </ul> */}
			</Navbar>
		)
	}
}

export default Nav;