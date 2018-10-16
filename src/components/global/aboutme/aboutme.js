import React from 'react';
import './aboutme.css';

import PhotoMir from '../../assets/PhotoMir.png';
// import img1 from '../../assets/logo2.png';
// import img2 from '../../assets/nodejs.jpg';
// import img3 from '../../assets/code.png';
// import img4 from '../../assets/react.png';
// import img5 from '../../assets/js.gif'

import { Carousel } from 'react-materialize';

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
				{/* <Carousel
					className ='responsive-img'
					images={[
						img1,
						img2,
						img3,
						img4,
						img5
					]} 
				/> */}
				{/* <br/>
				<br/>
				<br/>
				<br/> */}
				<div class="divider"></div>
			</div>
		</section>
	)
}

export default Aboutme;