let resumeData = {
	imagebaseurl: 'https://rbhatia46.github.io/',
	name: 'Wesley Chen',
	role: 'Fullstack Developer',
	roleDescription: 'Experienced in React & Rails based programming with a background in project organization.',
	socialLinks: [
		{
			name: 'linkedin',
			url: 'https://www.linkedin.com/in/wesley-chen-15735b26/',
			className: 'fa fa-linkedin'
		},
		{
			name: 'github',
			url: 'https://github.com/IdleScV',
			className: 'fa fa-github'
		},
		{
			name: 'instagram',
			url: 'https://www.instagram.com/wesleydoesthings/',
			className: 'fa fa-instagram'
		},
		{
			name: 'medium',
			url: 'https://medium.com/@weschen1996',
			className: 'fa fa-medium'
		},
		{
			name: 'email',
			url: 'mailto:weschen1996@gmail.com',
			className: 'fa fa-envelope'
		}
	],
	aboutme:
		'I am currently looking for Software Engineer opportunities in the DC metro area while expanding my project base.',
	address: 'Reston, VA',
	website: 'weschen1996@gmail.com',
	education: [
		{
			UniversityName: 'Flatiron School',
			specialization: 'Immersive Software Engineer Boot Camp',
			MonthOfPassing: 'May',
			YearOfPassing: '2020',
			Location: 'Washington, DC'
		},
		{
			UniversityName: 'Montgomery College',
			specialization: 'Associates in Business Management',
			MonthOfPassing: 'Aug',
			YearOfPassing: '2019',
			Location: 'Rockville, MD'
		},
		{
			UniversityName: 'International Culinary Center',
			specialization: 'Professional Culinary Arts',
			MonthOfPassing: 'March',
			YearOfPassing: '2017',
			Location: 'New York, NY'
		}
	],
	// work: [
	// 	{
	// 		CompanyName: 'Some Company',
	// 		specialization: 'Some specialization',
	// 		MonthOfLeaving: 'Jan',
	// 		YearOfLeaving: '2018',
	// 		Achievements: 'Some Achievements'
	// 	},
	// 	{
	// 		CompanyName: 'Some Company',
	// 		specialization: 'Some specialization',
	// 		MonthOfLeaving: 'Jan',
	// 		YearOfLeaving: '2018',
	// 		Achievements: 'Some Achievements'
	// 	}
	// ],
	skillsTypes: [
		{
			type: 'Technical Languages',
			names: [ 'CSS', 'HTML5', 'Javascript', 'JSON', 'Python', 'Ruby', 'SQL' ]
		},
		{ type: 'Development Tools', names: [ 'Express', 'Firebase', 'Git', 'jQuery', 'Rails', 'React', 'Redux' ] },
		{
			type: 'Operating Systems',
			names: [ ' Linux (Ubuntu)', 'OS X(Yosemite to Catalina)', 'Windows (XP, 7, 8, 10)' ]
		}
	],

	portfolio: [
		{
			name: 'Path',
			description:
				'View and create timelines for real or fictional people. Get to know what a person did and what they lived through. ',
			imgurl: 'images/portfolio/phone.jpg',
			github: [
				{ type: 'React Front End', url: 'https://github.com/IdleScV/mod5_frontend' },
				{ type: 'Rails Back End', url: 'https://github.com/IdleScV/mod5_backend' }
			],
			demourl: 'https://idlescv.github.io/Path_frontend/',
			youtubedemo: 'https://youtu.be/YD6uRh0HR6E'
		},
		{
			name: 'Draw-Off',
			description:
				'A fun and collaborative party game where up to 8 players are given interesting prompts to draw and rate.',
			imgurl: 'images/portfolio/project.jpg',
			github: [
				{ type: 'React Front End', url: 'https://github.com/IdleScV/mod4_frontend' },
				{ type: 'Rails Back End', url: 'https://github.com/IdleScV/mod4_backend' }
			],
			demourl: 'https://draw-off-app.herokuapp.com/',
			youtubedemo: 'https://youtu.be/4vn4oCgs-wc'
		},
		{
			name: 'Battle-Code',
			description: 'A coding challenge game where players compete 1 on 1 to see who solves the algorithm first.',
			imgurl: 'images/portfolio/project2.png',
			github: [
				{ type: 'Vanilla JS Front End', url: 'https://github.com/IdleScV/MOD-3-Project' },
				{ type: 'Rails Back End', url: 'https://github.com/bumbot/mod3project' }
			],
			youtubedemo: 'https://youtu.be/j96bmqo8Jns'
		},
		{
			name: 'Covid-Tracer',
			description:
				'Covid-19 data visualization with predictions using linear & exponential regression. Data Day Grind Hackathon project made in 24 hours. ',
			imgurl: 'images/portfolio/project.jpg',
			github: [ { type: 'React', url: 'https://github.com/IdleScV/06-27-DataDayGrind' } ],
			demourl: 'https://covid-tracer.netlify.app/',
			youtubedemo: 'https://www.youtube.com/watch?v=0TzISZQBsUQ&feature=youtu.be'
		}
	],
	testimonials: [],
	resumeUrl: 'https://docdro.id/FW7KIRU'
};

export default resumeData;
