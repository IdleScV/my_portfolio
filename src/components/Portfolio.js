import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player';

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
				<div className="twelve columns collapsed">
					<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
						<Carousel className="carousel">
							{resumeData.portfolio &&
								resumeData.portfolio.map((item, i) => {
									return (
										<div key={i} className="moving-item">
											<h2>{item.name}</h2>
											<div>
												<div className="description">
													<p>{item.description}</p>
													{item.demourl ? (
														<a
															href={item.demourl}
															alt="demo-link"
															className="demositelink "
															target="_blank"
															rel="noopener noreferrer"
														>
															Working Demo Site
														</a>
													) : null}
													<div>
														<h4>
															Want to look at the code? <i className="fa fa-github" />
														</h4>

														<div className="details">
															{item.github.map((x, i) => {
																return (
																	<a
																		key={i}
																		href={x.url}
																		alt={x.type}
																		className="githublink"
																		target="_blank"
																		rel="noopener noreferrer"
																	>
																		{x.type}
																	</a>
																);
															})}
														</div>
													</div>
												</div>
												<ReactPlayer
													controls
													width="100%"
													id="youtube-video"
													url={item.youtubedemo}
													rel="noopener noreferrer"
												/>
											</div>
										</div>
									);
								})}
						</Carousel>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
