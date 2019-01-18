/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import './contact.css';

import Linkedin from '../../assets/linkedin-logo.png';
import Cv from '../../assets/CV.png';

const Contact = () => {
  return (
		<section className='contact'>
			<footer className='page-footer black'>
				<div className='container'>
					<div className='row'>
						<div className='col l6 s12'>
							<h4 className='white-text'>Contactame</h4>
						</div>
						<div className='col l4 offset-l2 s12'>
							<h4 className='white-text'>Redes</h4>
							<ul>
								<li><a href='https://drive.google.com/file/d/1MfJ-EW47akThpbJJrcVRqke3NVh7CPfw/view?usp=sharing' className='tex-link-f valign-wrapper'>
									<img src={Cv} alt='curriculum' className='icon-footer'/>
									Curriculum
								</a></li>
								<li><a href='mailto:garciaivonne11@gmail.com' className='tex-link-f'>
									<i className='devicon-footer  devicon-google-plain grey-text text-lighten-3'></i> Mail
								</a></li>
								<li><a href='https://www.linkedin.com/in/MirianGarcia/' className='tex-link-f valign-wrapper'>
									<img src={Linkedin} alt='Linkedin' className='icon-footer'/>Mirian García
								</a></li>
								<li><a href='https://github.com/MirEnovi/' className='tex-link-f'>
									<i className='devicon-footer devicon-github-plain grey-text text-lighten-3'></i> MirIvonne
								</a></li>
								{/* <li><a href='https://twitter.com/mirenovi' className='tex-link-f'>
									<i className='devicon-footer-t devicon-twitter-plain grey-text text-lighten-3'></i>@MirEnovi
								</a></li> */}
							</ul>
						</div>
					</div>
				</div>
				<div className='footer-copyright'>
					<div className='container'>
					2018 Mir García
					<div>Algunos Iconos son de <a href='https://www.flaticon.es/autores/simpleicon' title='SimpleIcon'>SimpleIcon</a> desde <a href='https://www.flaticon.es/' title='Flaticon'>www.flaticon.com</a> con licencia <a href='http://creativecommons.org/licenses/by/3.0/' title='Creative Commons BY 3.0' target='_blank'>CC 3.0 BY</a></div>
					</div>
				</div>
			</footer>
		</section>
	);
};

export default Contact;