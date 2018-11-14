import React from 'react';
import './aboutme.css';

import PhotoMir from '../../assets/PhotoMir.png';
import firebase from '../../assets/firebase_logo.png';


const Aboutme = (props) => {
	return (
		<section className='aboutme container-fluid'>
			<div className = 'row text-body'>
				<div className = 'col s10 l7 offset-s1'>
					<h4 className = 'valign-wrapper mir-about'>Hola, soy Mirian García</h4>
					<p>
						Front-End Developer, mexicana, dibujante por afición, apasionada por el código, los viajes, los sudokus, Japón, y películas 35mm.<br/><br/>
						Actualmente hago Web Apps con JavaScript, usando herramientas como React.js, Node.js, Materialize y Bootstrap; además de implementar la metodología ágil.<br/>
						Me forjé en Laboratoria, pero me considero estudiante de por vida. Siempre he sido autodidacta, por lo que agregaré más tecnologías a mi lista de habilidades. <a href='#contact'>Contáctame</a>, y trabajemos juntos.
					</p>
				</div>
				<div className = 'col s8 m4 l3 offset-s3 offset-m4 offset-l1 center'>
					<img src = {PhotoMir} alt='Mir' className = 'photo-mir' />
				</div>
			</div>
			<h4 className='habilidades'>Habilidades</h4>
			<div className='col s12 m10 offset-m1'>
				<i className="devicon devicon-javascript-plain col s4 m4 l2"></i>
				<i className="devicon devicon-react-original-wordmark col s4 m42 l2"></i>
				<i className="devicon  devicon-html5-plain-wordmark col s4 m4 l2"></i>
				<i className="devicon  col s4 m4 l2">
					<img src={firebase} alt='firebase' width='150px' height='110px'/>
				</i>
				<i className="devicon devicon-git-plain-wordmark col s4 m4 l2"></i>
				<i className="devicon devicon-nodejs-plain-wordmark col s4 m4 l2"></i>
			</div>
		</section>
	)
}

export default Aboutme;