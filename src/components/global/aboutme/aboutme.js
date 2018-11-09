import React from 'react';
import './aboutme.css';

import PhotoMir from '../../assets/PhotoMir.png';


const Aboutme = (props) => {
	return (
		<section className='aboutme'>
			<div className = 'row text-body'>
				<div className = 'col s12 l6 offset-l1'>
					<h4 className = 'valign-wrapper mir-about'>Hola, soy Mirian Garcia</h4>
					<p >
						Front-End Developer, Mexicana,  apasionada por el codigo, los viajes, Sudoku, Japon, y peliculas 35mm.<br/>
						Actulmente me dedico a hacer Web Apps con JavaScript, implementando herramientas como React.js, Node.js, Materialize y Bootstrap.<br/>
						Me forje en Laboratoria, pero como el mundo no se detiene, me considero estudiante de por vida y me gusta ser y siempre he sido autodidacta, por lo que espero agregar más tecnologías a mi lista de habilidades.
					</p>
				</div>
				<div className = 'col s6 m5 l3 offset-s2 offset-m5 offset-l1  rigth'>
					<img src = {PhotoMir} alt='Mir' className = 'photo-mir shadow' />
				</div>
			</div>
			<h3 className='habilidades'>Habilidades</h3>
			<div className='row'>
				<i className="devicon  devicon-html5-plain-wordmark col s4 m2 l2"></i>
				<i className="devicon devicon-javascript-plain col s4 m2 l2"></i>
				<i className="devicon devicon-react-original-wordmark col s4 m2 l2"></i>
				<i className="devicon devicon-git-plain-wordmark col s4 m2 l2"></i>
				<i className="devicon devicon-nodejs-plain-wordmark col s4 m2 l2"></i>
				<i className="devicon devicon-visualstudio-plain-wordmark col s4 m2 l2"></i>
			</div>
		</section>
	)
}

export default Aboutme;