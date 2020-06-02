import React from 'react';
import ReactPlayer from 'react-player';

function ProjectCard({ item, i }) {
	return (
		<div key={i} className="moving-item">
			<div className="description">
				<h2>{item.name}</h2>
				<p className="project-snippet">{item.description}</p>
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

				<div className="github">
					<div className="title">
						Want to look at the code? <i className="fa fa-github" />
					</div>
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
			<div className="demo-video">
				<ReactPlayer
					controls
					width="100%"
					height="220px"
					id="youtube-video"
					url={item.youtubedemo}
					rel="noopener noreferrer"
				/>
			</div>
		</div>
	);
}

export default ProjectCard;
