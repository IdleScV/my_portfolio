import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import ReactCardFlip from 'react-card-flip';

function ProjectCard({ item, i }) {
	const [ isFlipped, setisFlipped ] = useState(false);
	return (
		<div key={i} className="moving-item">
			<h2>{item.name}</h2>

			<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
				<div className="front">
					<div className="demo-video">
						{item.youtubedemo ? (
							<ReactPlayer
								controls
								width="100%"
								height="220px"
								url={item.youtubedemo}
								rel="noopener noreferrer"
							/>
						) : (
							<div className="comingsoon">Demo Video Coming Soon</div>
						)}
					</div>
				</div>
				<div className="back">
					<p className="project-snippet">{item.description}</p>
					<div className="details">
						{item.demourl ? (
							<a
								href={item.demourl}
								alt="demo-link"
								className="demositelink "
								target="_blank"
								rel="noopener noreferrer"
							>
								WEBSITE
							</a>
						) : null}
						<br />
						<i className="fa fa-github"> Code : </i>
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
			</ReactCardFlip>
			<button
				onClick={() => {
					setisFlipped(!isFlipped);
				}}
			>
				{isFlipped ? 'Back to Demo Video' : 'More Details'}
			</button>
		</div>
	);
}

export default ProjectCard;
