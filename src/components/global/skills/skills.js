import React from 'react';
import './skills.css';

import firebase from '../../assets/firebase_logo.png';

const Skills = () => {
	return (
		<section id='skills' className='skills'>
			<h4 className='title-skills'>Habilidades</h4>
			<div className='col s12 m10 offset-m1'>

				<i className="devicon devicon-javascript-plain col s4 m4 l2"></i>

				<i className="devicon devicon-react-original-wordmark col s4 m4 l2"></i>

				<i className="devicon  devicon-html5-plain-wordmark col s4 m4 l2"></i>

				<i className="devicon devicon-git-plain-wordmark col s4 m4 l2"></i>

				<i className="devicon devicon-nodejs-plain-wordmark col s4 m4 l2"></i>

				<div className='col s4 m4 l2'>
					<img className='firebase ' src={firebase} alt='firebase'/>
				</div>
			</div>  
		</section>
	)
};

export default Skills;