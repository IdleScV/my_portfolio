import React from 'react';

function Resume({ resumeData }) {
	return (
		<section id="resume">
			<div className="row education">
				<div className="three columns header-col">
					<h1>
						<span>Education</span>
					</h1>
				</div>

				<div className="nine columns main-col">
					{resumeData.education &&
						resumeData.education.map((item) => {
							return (
								<div className="row item">
									<div className="twelve columns">
										<h3>{item.UniversityName}</h3>
										<p className="info">
											{item.specialization}
											<span>&bull;</span>{' '}
											<em className="date">
												{item.MonthOfPassing} {item.YearOfPassing}
											</em>
										</p>
										<p>{item.Location}</p>
									</div>
								</div>
							);
						})}
				</div>
			</div>
			{resumeData.work ? (
				<div className="row work">
					<div className="three columns header-col">
						<h1>
							<span>Work</span>
						</h1>
					</div>

					<div className="nine columns main-col">
						{resumeData.work &&
							resumeData.work.map((item) => {
								return (
									<div className="row item">
										<div className="twelve columns">
											<h3>{item.CompanyName}</h3>
											<p className="info">
												{item.specialization}
												<span>&bull;</span>{' '}
												<em className="date">
													{item.MonthOfLeaving} {item.YearOfLeaving}
												</em>
											</p>
											<p>{item.Achievements}</p>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			) : null}
			<div className="row skill">
				<div className="three columns header-col">
					<h1>
						<span>Skills</span>
					</h1>
				</div>

				<div className="nine columns main-col">
					{resumeData.skillsTypes.map((skill) => (
						<div className="skill-type">
							<p>{skill.type}</p>
							<div className="bars">
								<ul className="skills">
									{skill.names.map((item) => {
										return <li>{item}</li>;
									})}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
export default Resume;
