import React, { useState } from 'react';

function Portfolio({ resumeData, currentPageSet }) {
	const [ displayDetail, displayDetailSet ] = useState(false);
	const [ selected, selectedSet ] = useState(null);

	return (
		<section
			id="portfolio"
			onMouseEnter={() => {
				currentPageSet('Portfolio');
			}}
		>
			<h1>Check Out Some of My Works.</h1>
			{displayDetail ? (
				<div id="portfolio-detail" className="selected">
					<h3>{selected.name}</h3>
					<img src={selected.imgurl} />
					<p>{selected.description}</p>
					{selected.github.back ? (
						<div>
							<a href={selected.github.front} target="_blank" rel="noopener noreferrer">
								FrontEnd
							</a>
							<a href={selected.github.back} target="_blank" rel="noopener noreferrer">
								BackEnd
							</a>
						</div>
					) : (
						<div>
							<a href={selected.github.front} target="_blank" rel="noopener noreferrer">
								Project
							</a>
						</div>
					)}
				</div>
			) : (
				<div id="portfolio-detail" className="not-selected">
					This is the Carousel
				</div>
			)}
			<div className="row">
				<div className="twelve columns collapsed">
					<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
						{resumeData.portfolio &&
							resumeData.portfolio.map((item, i) => {
								return (
									<div
										key={i}
										className="columns portfolio-item"
										onClick={() => {
											selectedSet(item);
											displayDetailSet(true);
										}}
									>
										<div className="item-wrap">
											<div className="overlay">
												<div className="portfolio-item-meta">
													<h5>{item.name}</h5>
													<p>{item.description}</p>
												</div>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
