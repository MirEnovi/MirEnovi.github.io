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
					info={project.info}
					image={project.image}
				/>
			</div>
		)
	})
	return (
		<React.Fragment>
			<section className='row projects'>
				<h4 className = 'title-projects'>Mis Proyectos</h4>
				<div className='row'>
					{projectsCard}
				</div>
			</section>
		</React.Fragment>
	);
};

export default Projects;