import React from 'react';
import './skills.css';

//import firebase from '../../assets/firebase_logo.png';

const Skills = () => {
	return (
		<section className='skills'>
			<h4 className='title-skills'>Habilidades</h4>
			<div className='content-skills'>

				<i className="devicon devicon-html5-plain-wordmark "></i>
				
				<i className="devicon devicon-css3-plain-wordmark " ></i>
				<i className="devicon devicon-bootstrap-plain-wordmark " ></i>
				<i className="devicon devicon-javascript-plain "></i>

				<i className="devicon devicon-vuejs-plain-wordmark " ></i>
				<i className="devicon devicon-react-original-wordmark "></i>
				<i className="devicon devicon-nodejs-plain "></i>
				<i className="devicon devicon-jquery-plain-wordmark " ></i>


				<i className="devicon devicon-git-plain "></i>
				<i className="devicon devicon-github-original-wordmark " ></i>
				<i className="devicon devicon-gitlab-plain-wordmark " ></i>

				<i className="devicon devicon-php-plain " ></i>
				<i className="devicon devicon-laravel-plain-wordmark " ></i>

				{//<img className='firebase col s4 m4 l2' src={firebase} alt='firebase'/>
				}

			</div>  
		</section>
	)
};

export default Skills;