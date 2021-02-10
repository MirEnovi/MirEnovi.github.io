import React from 'react';
import './aboutme.css';

import PhotoMir from '../../assets/PhotoMir.png';


const Aboutme = (props) => {
	return (
		<section className='aboutme container-fluid'>
			<div className = 'row text-body'>
				<div className = 'contain-text-about'>
					<h4 className = 'valign-wrapper mir-about'>Hola, soy Mirian García</h4>
					<p>
						Front-End Developer, dibujante por afición, apasionada por el código, los viajes, los sudokus, Japón y películas 35mm.<br/><br/>
						Actualmente hago Web Apps usando JavaScript y herramientas como React.js, Node.js, Jquery, PHP, Laravel; además de implementar la metodología ágil.<br/>
						La curiosidad me ha hecho autodidacta, por lo que agregaré más tecnologías a mi lista de habilidades. <a href='#contact'>Contáctame</a>, y trabajemos juntos.
					</p>
				</div>
				<div className= 'contain-img-about' >
					<img src = {PhotoMir} alt='Mir' className = 'photo-mir' />
				</div>
			</div>
		</section>
	)
}

export default Aboutme;