/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import './nav.css';
// import { Navbar, NavItem } from 'react-materialize';

import logo from '../../assets/logoMir.png';

class Nav extends Component {
	render() {
		return (
			<header className='row color navbar-fixed'>
				<nav className = 'color right'>
					<ul className='left col m7 '>
						<li><a href='#' className='text-nav'>Acerca de Mí</a></li>
						<li><a href='#' className='text-nav'>Proyectos</a></li>
						<li><a href='#' className='text-nav'>Tecnologías</a></li>
						<li><a href='#' className='text-nav'>Contacto</a></li>
					</ul>
					<ul className='col m3'>
						<li><a href='#' className='brand-logo right'> 
							<img src={logo} alt='Logo Mir' className ='hide-on-small-only size'/>
						</a></li>
						<li><a href='collapsible.html' className = 'text-nav mir'>Mirian García</a></li>
				</ul>
				</nav>
			</header>
			// <Navbar brand={
			// 	<p className = 'text-nav mir'>Mirian García</p>
			// 	} 
			// 	fixed = 'true'
			// 	left 
			// 	className = 'color '>
			// 	{/* <ul id = 'nav-mobile' > */}
			// 		<NavItem>
			// 			<a className = ' text-nav' href='badges.html'>Acerca de Mí</a>
			// 		</NavItem>
			// 		<NavItem>
			// 			<a className = ' text-nav' href='badges.html'>Portafolio</a>
			// 		</NavItem>
			// 		<NavItem>
			// 			<a className = ' text-nav' href='collapsible.html'>Contacto</a>
			// 		</NavItem>
			// 	{/* </ul> */}
			// </Navbar>

		)
	}
}

export default Nav;