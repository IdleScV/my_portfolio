import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ProPic from '../images/profilepic.jpg';

const THRESHOLD = [ 0.75 ];

function About({ resumeData, currentPageSet }) {
	const [ ref, inView ] = useInView({ threshold: THRESHOLD });

	useEffect(
		() => {
			if (inView) {
				currentPageSet('About');
			}
		},
		[ inView, currentPageSet ]
	);

	return (
		<section ref={ref} id="about">
			<div className="row">
				<div className="three columns">
					<img className="profile-pic" src={ProPic} alt="" />
				</div>

				<div className="nine columns main-col">
					<h2>About Me</h2>
					<p>{resumeData.aboutme}</p>

					<div className="row">
						<div className="columns contact-details">
							<h2>Contact Details</h2>
							<p className="address">
								<span>{resumeData.name}</span>
								<br />
								<span>{resumeData.address}</span>
								<br />
								<span>{resumeData.website}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
