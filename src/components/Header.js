import React, { useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useInView } from 'react-intersection-observer';

const THRESHOLD = [ 0.7 ];

function Header({ resumeData, currentPageSet, currentPage }) {
	const [ ref, inView ] = useInView({ threshold: THRESHOLD });
	useEffect(
		() => {
			if (inView) {
				currentPageSet('Home');
			}
		},
		[ inView, currentPageSet ]
	);

	return (
		<React.Fragment>
			<div className="tint">
				<header id="home" ref={ref}>
					<nav id="nav-wrap">
						<ul id="nav" className="nav">
							<li className={currentPage === 'Home' ? 'current' : null} onClick={() => currentPageSet('Home')}>
								<AnchorLink className="smoothscroll" href="#home">
									Home
								</AnchorLink>
							</li>
							<li className={currentPage === 'About' ? 'current' : null} onClick={() => currentPageSet('About')}>
								<AnchorLink className="smoothscroll" href="#about">
									About
								</AnchorLink>
							</li>
							<li
								className={currentPage === 'Resume' ? 'current' : null}
								onClick={() => currentPageSet('Resume')}
							>
								<AnchorLink className="smoothscroll" href="#resume">
									Resume
								</AnchorLink>
							</li>
							<li
								className={currentPage === 'Portfolio' ? 'current' : null}
								onClick={() => currentPageSet('Portfolio')}
							>
								<AnchorLink className="smoothscroll" href="#portfolio">
									Works
								</AnchorLink>
							</li>
						</ul>
					</nav>

					<div className="row banner ">
						<div className="banner-text">
							<h1 className="responsive-headline">{resumeData.name}</h1>
							<h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>
								{resumeData.role}
								<br />
								{resumeData.roleDescription}
							</h3>
							<hr />
							<ul className="social">
								{resumeData.socialLinks &&
									resumeData.socialLinks.map((item) => {
										return (
											<li key={item.name}>
												<a href={item.url} target="_blank" rel="noopener noreferrer">
													<i className={item.className} />
												</a>
											</li>
										);
									})}
							</ul>
						</div>
					</div>

					<p className="scrolldown">
						<AnchorLink className="smoothscroll" href="#about">
							<i className="icon-down-circle" />
						</AnchorLink>
					</p>
				</header>
			</div>
		</React.Fragment>
	);
}

export default Header;
