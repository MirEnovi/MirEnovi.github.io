import React from 'react';
// import { Carousel } from 'react-materialize';

import './home.css';
// import PhotoMir from '../../assets/PhotoMir.png';
import img3 from '../../assets/code.png';
import img5 from '../../assets/js.gif';


const Home = () => {
	return (
		<section className ='background-home'>
			<div className = 'row home'>
				<dic className = 'col s10 m6 l4 offset-s1 offset-m1 offset-l1 background-carusel'>
					{/* <img src = {PhotoMir} alt = 'Mirian Garcia´s Photo' className = 'photo-mir' /> */}
					<img src = {img5} alt = 'Logo' className = 'col s12 photo-home' />
				</dic>
				<div className = 'col s10 m5 l5 text-home'>
					<h2>Front-End Developer</h2>
				</div>
			</div>
			<div class="divider"></div>
		</section>
	)
}

export default Home;
