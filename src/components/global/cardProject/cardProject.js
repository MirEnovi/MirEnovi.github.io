import React from 'react';

const Card = (props) => {
	return (
		<div className='card card-panel grey darken-4'>
			<div className='card-image waves-effect waves-block waves-light'>
				<img className='activator' src={props.image} alt={props.title}/>
			</div>
			<div className='card-content'>
				<span className='card-title activator blue-grey-text text-lighten-5'>{props.title}<i className='material-icons right'>more_vert</i></span>
				<p><a href={props.link} className='amber-text text-acent-5'>Visitar</a></p>
			</div>
			<div className='card-reveal'>
				<span className='card-title grey-text text-darken-4'>{props.title}<i className='material-icons right'>close</i></span>
				<p>{props.info}.</p>
			</div>
		</div> 
	);
};

export default Card;
