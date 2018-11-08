import React from 'react';
import './aboutme.css';

import PhotoMir from '../../assets/PhotoMir.png';


const Aboutme = (props) => {
	return (
		<section className='aboutme'>
			<div className = 'row text-body'>
				<div className = 'col s12 l6 offset-l1'>
					<h4 className = 'valign-wrapper'>Hola, soy Mir</h4>
					<p >
						
						Me apasiona el código.<br/>
						Actualmente soy Front-End Developer. Hago Web App's con JavaScript, implementando herramientas como React.js, Node.js, Materialize y Bootstrap.<br/> 
						Me forje en el código en Laboratoria, pero como el mundo no se detiene, me considero estudiante de por vida y me gusta ser autodidacta, por lo que espero agregar mas tecnologías a mi lista de Skills.
						
					</p>
				</div>
				<div className = 'col s12 l3 offset-l1 rigth'>
					<img src = {PhotoMir} alt='Mir' className = 'photo-mir shadow' />
				</div>
			</div>
			<div className='row'>
				<i className="devicon devicon-html5-plain-wordmark col s4 m2 l2"></i>
				<i className="devicon devicon-javascript-plain col s4 m2 l2"></i>
				<i className="devicon devicon-css3-plain-wordmark col s4 m2 l2"></i>
				<i className="devicon devicon-bootstrap-plain-wordmark col s4 m2 l2"></i>
				<i className="devicon devicon-react-original col s4 m2 l2"></i>
				<i className="devicon devicon-git-plain-wordmark col s4 m2 l2"></i>
				<i className="devicon devicon-github-plain-wordmark col s4 m2 l2"></i>
				<i className="devicon devicon-nodejs-plain-wordmark col s4 m2 l2"></i>
				<i className="devicon devicon-visualstudio-plain-wordmark col s4 m2 l2"></i>
				<i className="devicon devicon-photoshop-line col s4 m2 l2"></i>
				<i className="devicon devicon-slack-plain-wordmark col s4 m2 l2"></i>
				<i className="devicon devicon-trello-plain-wordmark col s4 m2 l2"></i>
			</div>
		</section>
	)
}

export default Aboutme;