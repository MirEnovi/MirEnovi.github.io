import React from 'react';
// import { Carousel } from 'react-materialize';

import './home.css';
// import PhotoMir from '../../assets/PhotoMir.png';
import img5 from '../../assets/js.gif';


const Home = () => {
	return (
		<section className = 'background-home content-home' >
			< div className = '  background-div' >
				<img src = {img5}alt = 'Logo'className = 'col s12 photo-home' />
			</div>
			<div className = 'text-home' >
				<h3> Mirian Ivonne García Hernández </h3>
				<h5> Front - End Developer </h5> 
			</div>
		</section>
	)
}

export default Home;
