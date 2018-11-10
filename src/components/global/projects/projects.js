import React from 'react';

import '../projects/projects.css';
import infoProjects from '../../../data/infoProjects';
import Card from '../cardProject/cardProject';

// import Cipher from '../../assets/cipher.png';

const Projects = () => {

	const projectsCard = infoProjects.map((project,index) => {
		return (
			<div key={`card-${index}`} className='col s10 m4 l3 offset-s1'>
				<Card
					title={project.title}
					link={project.link}
					code={project.code}
					info={project.info}
					image={project.image}
				/>
			</div>
		)
	})
	return (
		<section className='containter projects'>
		<div className='row'>
			<h4 className = 'title-projects'>Mis Proyectos</h4>
		</div>
			
			<div className='row'>
			<div className='col s12 l10 offset-l1'>
				{projectsCard}
			</div>
			</div>
		</section>
	);
};

export default Projects;