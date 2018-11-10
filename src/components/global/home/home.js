import React from 'react';
// import { Carousel } from 'react-materialize';

import './home.css';
// import PhotoMir from '../../assets/PhotoMir.png';
import img5 from '../../assets/js.gif';


const Home = () => {
	return (
		<section className ='background-home'>
			<div className = 'row'>
				<div className = 'col s10 m8 l6 offset-s1 offset-m1 offset-l1 background-div'>
					<img src = {img5} alt = 'Logo' className = 'col s12 photo-home' />
				</div>
				<div className = 'col s10 m5 l5 text-home'>
					<h3>Mirian Ivonne García Hernandez</h3>
					<h5>Front-End Developer</h5>
				</div>
			</div>
		</section>
	)
}

export default Home;
