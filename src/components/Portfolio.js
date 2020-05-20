import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';

function Portfolio({ resumeData, currentPageSet }) {
	return (
		<section
			id="portfolio"
			onMouseEnter={() => {
				currentPageSet('Portfolio');
			}}
		>
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
														<a href={item.demourl} alt="demo-link" className="demositelink ">
															Working Demo Site
														</a>
													) : null}
													<p>
														<h4>
															Want to look at the code? <i className="fa fa-github" />{' '}
														</h4>

														<div className="details">
															{item.github.map((x) => {
																return (
																	<a href={x.url} alt={x.type} className="githublink">
																		{x.type}
																	</a>
																);
															})}
														</div>
													</p>
												</div>
												<ReactPlayer controls width="100%" id="youtube-video" url={item.youtubedemo} />
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
