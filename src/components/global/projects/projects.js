import React from 'react';

import '../projects/projects.css';
import infoProjects from '../../../data/infoProjects';
import CardPjc from '../cardProject/cardProject';

// import Cipher from '../../assets/cipher.png';

const Projects = () => {

	const projectsCard = infoProjects.map((project,index) => {
		return (
			<CardPjc
				key={`card-${index}`}
				title={project.title}
				link={project.link}
				code={project.code}
				info={project.info}
				tec={project.tec}
				image={project.image}
			/>
		)
	})
	return (
		<section className='containter-fluid projects'>
			<div className='row'>
				<h4 className = 'title-project'>Mis Proyectos</h4>
			</div>
			<div div className = 'content-cards' >
				{ projectsCard }
			</div>
		</section>
	);
};

export default Projects;