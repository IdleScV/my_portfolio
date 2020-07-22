import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import ReactCardFlip from 'react-card-flip';

function ProjectCard({ item, i }) {
	const [ isFlipped, setisFlipped ] = useState(false);
	return (
		<div key={i} className="moving-item">
			<h2>{item.name}</h2>
			<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
				<div className="front">
					<div className="demo-video">
						{item.youtubedemo ? (
							<ReactPlayer
								controls
								width="100%"
								height="220px"
								id="youtube-video"
								url={item.youtubedemo}
								rel="noopener noreferrer"
							/>
						) : (
							<div className="comingsoon">Demo Video Coming Soon</div>
						)}
					</div>

					<button
						onClick={() => {
							setisFlipped(!isFlipped);
						}}
					>
						Details
					</button>
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
								Working Demo Site
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
					<button
						onClick={() => {
							setisFlipped(!isFlipped);
						}}
					>
						Demo Video
					</button>
				</div>
			</ReactCardFlip>
		</div>
	);
}

export default ProjectCard;
