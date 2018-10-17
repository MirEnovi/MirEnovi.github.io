import React from 'react';
import './aboutme.css';

import PhotoMir from '../../assets/PhotoMir.png';


const Aboutme = (props) => {
	return (
		<section className = 'row aboutme text-body'>
			<div className = 'col s12 l5'>
				<h3 className = 'valign-wrapper'>Bienvenido</h3>
				<p className = 'text-body-size left-align'>
					Mi nombre es <b>Mirian Ivonne García Hernández</b>.
					Me apasiona el código.<br/>
					Actualmente soy Front-End Developer. Hago Web App's con JavaScript, implementando herramientas como React.js, Node.js, Materialize y Bootstrap.<br/> 
					Me forje en el código en Laboratoria, pero como el mundo no se detiene, me considero estudiante de por vida y me gusta ser autodidacta, por lo que espero agregar mas tecnologías a la lista anterior.
					
				</p>
			</div>
			<div className = 'col s12 l5 offset-l1'>
				<img src = {PhotoMir} alt = 'Mirian Garcia´s Photo' className = 'photo-mir ' />
				<div class="divider"></div>
			</div>
		</section>
	)
}

export default Aboutme;