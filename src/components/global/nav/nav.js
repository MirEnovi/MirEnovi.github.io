/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './nav.css';

import logo from '../../assets/logoMir.png';

const Nav = () => {
	return (
		<header className='navbar-fixed'>
			<nav className = 'color-nav'>
				<ul className='col s2 m5 left'>
					<li><a href='#' className='hide-on-small-only'> 
						<img src={logo} alt='Logo' className =' size'/>
					</a></li>
					<li><a href='#' className = 'text-nav mir'>Mir 
					<span className='garcia-nav'>ian García</span>
					</a></li>
				</ul>
				<ul className='col s10 m7 l8 right'>
					<li><a href='#aboutme' className='text-nav truncate'>Acerca de Mí</a></li>
					<li><a href='#projects' className='text-nav'>Proyectos</a></li>
					<li><a href='#contact' className='text-nav'>Contacto</a></li>
				</ul>
			</nav>
		</header>
	);
};

export default Nav;