import React, { Component } from 'react';

import './nav.css';
import { Navbar, NavItem } from 'react-materialize'

class Nav extends Component {
	render() {
		return (
			<Navbar brand='Mir García' left className = 'amber blue-grey-text text-darken-3'>
				{/* <ul id = 'nav-mobile' > */}
					<NavItem>
						<a className = 'blue-grey-text text-darken-3' href='badges.html'>Acerca de Mi</a>
					</NavItem>
					<NavItem>
						<a className = 'blue-grey-text text-darken-3' href='badges.html'>PortafoNavItemo</a>
					</NavItem>
					<NavItem>
						<a className = 'blue-grey-text text-darken-3' href='collapsible.html'>Contacto</a>
					</NavItem>
				{/* </ul> */}
			</Navbar>
		)
	}
}

export default Nav;