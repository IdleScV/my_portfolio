import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
function Footer({ resumeData, currentPageSet }) {
	return (
		<footer>
			<h2>Contact Me Here . . . </h2>
			<div className="row">
				<div className="twelve columns">
					<ul className="social-links">
						{resumeData.socialLinks &&
							resumeData.socialLinks.map((item, i) => {
								return (
									<li key={i}>
										<a href={item.url}>
											<i className={item.className} />
										</a>
									</li>
								);
							})}
					</ul>
				</div>
				<div id="go-top">
					<AnchorLink
						className="smoothscroll"
						title="Back to Top"
						href="#home"
						onClick={() => {
							currentPageSet('Home');
						}}
					>
						<i className="icon-up-open" />
					</AnchorLink>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
