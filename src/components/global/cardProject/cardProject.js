import React from 'react';

const Card = (props) => {
	return (
		<div className='card card-panel black'>
			<div className='card-image waves-effect waves-block waves-light'>
				<img className='activator' src={props.image} alt={props.title}/>
			</div>
			<div className='card-content'>
				<div className='col s12'>
					<p className='c-title activator blue-grey-text text-lighten-5'>{props.title}</p>
					<p className='c-click-text'>Detalles: Click en la imagen</p>
					
					<button className='black col s12 waves-effect waves-light'>
						<a href={props.code} className='amber-text text-acent-5'>Codigo</a>
					</button>

					<button className='black col s12 waves-effect waves-light'>
						<a href={props.link} className='amber-text text-acent-5'>Visitar</a>
					</button>
				</div>
			</div>
			<div className='card-reveal'>
				<span className='card-title grey-text text-darken-4'>{props.title}<i className='material-icons right'>close</i></span>
				<p>{props.info}.</p>
			</div>
		</div> 
	);
};

export default Card;
