import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
// import Testimonials from './components/Testimonials';
// import ContactUs from './components/ContactUs';
import ResumeFile from './components/ResumeFile';
import Footer from './components/Footer';
import resumeData from './resumeData';
function App() {
	const [ currentPage, currentPageSet ] = useState('Home');

	return (
		<div className="App">
			<Header resumeData={resumeData} currentPageSet={currentPageSet} currentPage={currentPage} />
			<About resumeData={resumeData} currentPageSet={currentPageSet} />
			<Resume resumeData={resumeData} currentPageSet={currentPageSet} />

			<Portfolio resumeData={resumeData} currentPageSet={currentPageSet} />
			<ResumeFile resumeData={resumeData} currentPageSet={currentPageSet} />
			{/* <ContactUs resumeData={resumeData} currentPageSet={currentPageSet} /> */}
			<Footer resumeData={resumeData} currentPageSet={currentPageSet} />
		</div>
	);
}

export default App;
