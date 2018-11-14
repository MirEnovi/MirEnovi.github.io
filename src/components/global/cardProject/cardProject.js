import React from 'react';

const CardPjc = (props) => {
	return (

            
		<div key = {props.key} className='card  black'>
			<div className='card-image waves-effect waves-block waves-light'>
				<img className='activator responsive-img' src={props.image} alt={props.title}/>
			</div>
			<div className='card-content'>
				<div className='col s12'>
					<p className='c-title activator blue-grey-text text-lighten-5'>{props.title}</p>
					<p className='c-click-text'>Detalles: Click en la imagen</p>
					
					<button href={props.code} className='black amber-text text-acent-5 col s12 m6 l6 waves-effect waves-light'>Codigo</button>
					

					<button href={props.link} className='black amber-text text-acent-5 col s12 m6 l6 waves-effect waves-light'>Visitar</button>
				</div>
			</div>
			<div className='card-reveal'>
				<span className='card-title grey-text text-darken-4'>{props.title}<i className='material-icons right'>close</i></span>
				<p>{props.info}.</p>
			</div>
		</div> 
	);
};

export default CardPjc;
