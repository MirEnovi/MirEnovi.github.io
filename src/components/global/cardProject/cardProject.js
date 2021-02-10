import React from 'react';

const CardPjc = (props) => {
	const goCode = () => {
		window.location.replace(props.code);		
	};
	const goLink = () => {
		window.location.replace(props.link);
	};

	return (     
		<div key = {props.key} className='card  black'>
			<div className='card-image waves-effect waves-block waves-light'>
				<img className='activator responsive-img' src={props.image} alt={props.title}/>
			</div>
			<div className='card-content'>
				<p className='c-title activator blue-grey-text text-lighten-5'>{props.title}</p>
				<p className='c-click-text'>Detalles: Click en la imagen</p>
				<div className='btn-content'>
					{
						props.code && <button onClick={goCode} className='black amber-text text-acent-5 waves-effect waves-light'>Codigo</button>
					}
					{
						props.link && <button onClick={goLink} className='black amber-text text-acent-5 waves-effect waves-light'>Visitar</button>
					}
				</div>
			</div>
			<div className='card-reveal reve-card'>
				<span className='card-title c-title'>{props.title}<i className='material-icons right'>close</i></span>
				<p>{props.info}<br/><br/><span className='tec'>{props.tec}</span></p>
			</div>
		</div> 
	);
};

export default CardPjc;
