import React, { Component } from 'react';

import './nav.css';
import { Navbar } from 'react-materialize'

class Nav extends Component {
	render() {
		return (
			<Navbar brand='Mir García' left className = 'amber blue-grey-text text-darken-3'>
				<ul id = 'nav-mobile' className = 'right hide-on-med-and-down'>
					<li>
						<a className = 'blue-grey-text text-darken-3' href='badges.html'>Acerca de Mi</a>
					</li>
					<li>
						<a className = 'blue-grey-text text-darken-3' href='badges.html'>Portafolio</a>
					</li>
					<li>
						<a className = 'blue-grey-text text-darken-3' href='collapsible.html'>Contacto</a>
					</li>
				</ul>
			</Navbar>
		)
	}
}

export default Nav;