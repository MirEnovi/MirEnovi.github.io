import React from 'react';
import './aboutme.css';

import PhotoMir from '../../assets/PhotoMir.png';


const Aboutme = (props) => {
	return (
		<section className='aboutme container-fluid'>
			<div className = 'row text-body'>
				<div className = 'col s10 l6 offset-s1 offset-l1'>
					<h4 className = 'valign-wrapper mir-about'>Hola, soy Mirian García</h4>
					<p>
						Front-End Developer, dibujante por afición, apasionada por el código, los viajes, los sudokus, Japón, y películas 35mm.<br/><br/>
						Actualmente hago Web Apps usando JavaScript y herramientas como React.js, Node.js, Jquery, PHP, Laravel; además de implementar la metodología ágil.<br/>
						La curiosidad me ha hecho autodidacta, por lo que agregaré más tecnologías a mi lista de habilidades. <a href='#contact'>Contáctame</a>, y trabajemos juntos.
					</p>
				</div>
				<div className = 'col s8 m6 l3 offset-s2 offset-m3 offset-l1'>
					<img src = {PhotoMir} alt='Mir' className = 'photo-mir' />
				</div>
			</div>
		</section>
	)
}

export default Aboutme;