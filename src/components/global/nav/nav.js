import React, { Component } from 'react';

import './nav.css';

class Nav extends Component {
	render() {
		return (
			<nav className = 'navbar-fixed'>
				<div className = 'nav-wrapper'>
					<a href = '#' className = 'brand-logo'>Mir García</a>
					<ul id = 'nav-mobile' className = 'right hide-on-med-and-down'>
						<li><a href='badges.html'>Acerca de Mi</a></li>
						<li><a href='badges.html'>Portafolio</a></li>
						<li><a href='collapsible.html'>Contacto</a></li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Nav;