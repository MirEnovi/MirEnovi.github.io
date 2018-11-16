import React from 'react';
// import { Carousel } from 'react-materialize';

import './home.css';
// import PhotoMir from '../../assets/PhotoMir.png';
import img5 from '../../assets/js.gif';


const Home = () => {
	return (
		<section className ='background-home'>
			<div className = 'row'>
				<div className = 'col s12 m8 l7 offset-m2 offset-l0  background-div'>
					<img src = {img5} alt = 'Logo' className = 'col s12 photo-home' />
				</div>
				<div className = 'col s12 m12 l4 text-home'>
					<h3>Mirian Ivonne García Hernández</h3>
					<h5>Front-End Developer</h5>
				</div>
			</div>
		</section>
	)
}

export default Home;
