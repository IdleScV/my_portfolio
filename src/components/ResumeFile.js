import React from 'react';
import { Document } from 'react-pdf';
import pdfFile from './5_18WChenResume.pdf';

function ResumeFile() {
	return (
		<div id="resume-file">
			<Document file={pdfFile} />
		</div>
	);
}

export default ResumeFile;
