import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useInView } from 'react-intersection-observer';

import ProjectCard from './Container/projectCard';

const THRESHOLD = [ 0.75 ];
function Portfolio({ resumeData, currentPageSet }) {
	const [ ref, inView ] = useInView({ threshold: THRESHOLD });

	useEffect(
		() => {
			if (inView) {
				currentPageSet('Portfolio');
			}
		},
		[ inView, currentPageSet ]
	);
	return (
		<section id="portfolio" ref={ref}>
			<h1>Check Out Some of My Previous Projects</h1>

			<div className="row">
				<div id="portfolio-wrapper">
					{resumeData.portfolio && resumeData.portfolio.map((item, i) => <ProjectCard item={item} key={i} />)}
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
