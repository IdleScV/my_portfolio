import React from 'react';

function ContactUs({ resumeData, currentPageSet }) {
	return (
		<section
			id="contact"
			onMouseEnter={() => {
				currentPageSet('Contact');
			}}
		>
			<div className="row section-head">
				<div className="ten columns">
					<p className="lead">Feel free to contact me for any work</p>
				</div>
			</div>
			<div className="row">
				<aside className="eigth columns footer-widgets">
					<div className="widget">
						<h4>
							Email :
							<br />
							{resumeData.website}
						</h4>
					</div>
				</aside>
			</div>
		</section>
	);
}

export default ContactUs;
