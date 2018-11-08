import React from 'react';

import './contact.css';

import Linkedin from '../../assets/linkedin-logo.png';
import Cv from '../../assets/CV.png';

const Contact = () => {
  return (
		<section className='contact'>
			{/* <h3 className = 'title-projects'>
				Contacto
			</h3>
			<div className='row'>
				<a href='https://github.com/MirEnovi/'>
				<i className="devicon-github-plain col s4 m2 l2"></i>
				</a>
				
				<i className="devicon devicon-javascript-plain col s4 m2 l2"></i>
				<i className="devicon devicon-css3-plain-wordmark col s4 m2 l2"></i>
				<i className="devicon devicon-bootstrap-plain-wordmark col s4 m2 l2"></i>
				<i className="devicon devicon-react-original col s4 m2 l2"></i>
				<i className="devicon devicon-git-plain-wordmark col s4 m2 l2"></i>
				<i className="devicon devicon-github-plain-wordmark col s4 m2 l2"></i>
				<i className="devicon devicon-nodejs-plain-wordmark col s4 m2 l2"></i>
				<i className="devicon devicon-visualstudio-plain-wordmark col s4 m2 l2"></i>
				<i className="devicon devicon-photoshop-line col s4 m2 l2"></i>
				<i className="devicon devicon-slack-plain-wordmark col s4 m2 l2"></i>
				<i className="devicon devicon-trello-plain-wordmark col s4 m2 l2"></i>
			</div> */}

			<footer className="page-footer grey darken-4 contact">
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<h4 className="white-text">Contactame</h4>
							{/* <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p> */}
						</div>
						<div className="col l4 offset-l2 s12">
							<h4 className="white-text">Redes</h4>
							<ul>
								<li><a href='https://github.com/MirEnovi/' className='tex-link-f'>
									<i className="devicon-footer devicon-github-plain grey-text text-lighten-3"></i> MirIvonne
								</a></li>
								<li><a href='https://slack.com/intl/es-es/' className='tex-link-f'>
									<i className="devicon-footer devicon-slack-plain grey-text text-lighten-3"></i> MirIvonne
								</a></li>
								<li><a href='mailto:garciaivonne11@gmail.com' className='tex-link-f'>
									<i className="devicon-footer devicon-google-plain grey-text text-lighten-3"></i> garciaivonne11@gmail.com
								</a></li>
								<li><a href='https://twitter.com/mirenovi' className='tex-link-f'>
									<i className="devicon-footer devicon-twitter-plain grey-text text-lighten-3"></i> @MirIvonne
								</a></li>
								<li><a href='https://www.linkedin.com/in/MirianGarcia/' className='tex-link-f valign-wrapper'>
									<img src={Linkedin} alt='Linkedin' className='icon-footer'/>
									Mirian García
								</a></li>
								<li><a href='https://drive.google.com/file/d/1fvgfcCtCqu2bJSIph7C9FIxL_fRPAZxG/view?usp=sharing' className='tex-link-f valign-wrapper'>
									<img src={Cv} alt='curriculum' className='icon-footer'/>
									Curriculum
								</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container">
					© 2018 Copyright Mir García
					<div>Algunos Iconos son de <a href="https://www.flaticon.es/autores/simpleicon" title="SimpleIcon">SimpleIcon</a> desde <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.com</a> con licencia <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
					{/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
					</div>
				</div>
			</footer>
		</section>
	);
};

export default Contact;