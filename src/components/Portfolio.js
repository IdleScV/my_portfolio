import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Portfolio({ resumeData, currentPageSet }) {
	return (
		<section
			id="portfolio"
			onMouseEnter={() => {
				currentPageSet('Portfolio');
			}}
		>
			<h1>Check Out Some of My Works.</h1>

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
													<p>
														<i className="fa fa-github" /> <a>FRONT</a> <a>BACK</a>
													</p>
													<a>DEMO WEBSITE</a>
												</div>
												<img id="youtube-video" src={item.imgurl} alt="words" />
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
