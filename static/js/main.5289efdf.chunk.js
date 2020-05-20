(this.webpackJsonpmy_portfolio=this.webpackJsonpmy_portfolio||[]).push([[0],{11:function(e,a,t){e.exports=t.p+"static/media/zombo.8b270850.PNG"},13:function(e,a,t){e.exports=t(28)},18:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(2),s=t.n(r),c=(t(18),t(12)),o=t(1),i=t.n(o);var m=function(e){var a=e.resumeData,t=e.currentPageSet,n=e.currentPage;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"Home"===n?"current":null,onClick:function(){return t("Home")}},l.a.createElement(i.a,{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",{className:"About"===n?"current":null,onClick:function(){return t("About")}},l.a.createElement(i.a,{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",{className:"Resume"===n?"current":null,onClick:function(){return t("Resume")}},l.a.createElement(i.a,{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",{className:"Portfolio"===n?"current":null,onClick:function(){return t("Portfolio")}},l.a.createElement(i.a,{className:"smoothscroll",href:"#portfolio"},"Works")))),l.a.createElement("div",{className:"row banner",onMouseEnter:function(){t("Home")}},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},a.name),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},a.role,l.a.createElement("br",null),a.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},a.socialLinks&&a.socialLinks.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))}))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement(i.a,{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))},u=t(9),p=t.n(u);var d=function(e){var a=e.resumeData,t=e.currentPageSet;return l.a.createElement("section",{id:"about",onMouseEnter:function(){t("About")}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:p.a,alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,a.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,a.name),l.a.createElement("br",null),l.a.createElement("span",null,a.address),l.a.createElement("br",null),l.a.createElement("span",null,a.website)))))))};var E=function(e){var a=e.resumeData,t=e.currentPageSet;return l.a.createElement("section",{id:"resume",onMouseEnter:function(){t("Resume")}},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},a.education&&a.education.map((function(e,a){return l.a.createElement("div",{className:"row item",key:a},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Location)))})))),a.work?l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},a.work&&a.work.map((function(e,a){return l.a.createElement("div",{className:"row item",key:a},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))})))):null,l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},a.skillsTypes.map((function(e,a){return l.a.createElement("div",{className:"skill-type",key:a},l.a.createElement("p",null,e.type),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.names.map((function(e,a){return l.a.createElement("li",{key:a},e)})))))})))))},h=(t(19),t(10));var f=function(e){var a=e.resumeData,t=e.currentPageSet;return l.a.createElement("section",{id:"portfolio",onMouseEnter:function(){t("Portfolio")}},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},l.a.createElement(h.Carousel,{className:"carousel"},a.portfolio&&a.portfolio.map((function(e,a){return l.a.createElement("div",{key:a,className:"moving-item"},l.a.createElement("h2",null,e.name),l.a.createElement("div",null,l.a.createElement("div",{className:"description"},l.a.createElement("p",null,e.description),l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-github"})," ",l.a.createElement("a",null,"FRONT")," ",l.a.createElement("a",null,"BACK")),l.a.createElement("a",null,"DEMO WEBSITE")),l.a.createElement("img",{id:"youtube-video",src:e.imgurl,alt:"words"})))})))))))};var g=function(e){var a=e.resumeData,t=e.currentPageSet;return l.a.createElement("footer",null,l.a.createElement("h2",null,"Contact Me Here . . . "),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},a.socialLinks&&a.socialLinks.map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("div",{id:"go-top"},l.a.createElement(i.a,{className:"smoothscroll",title:"Back to Top",href:"#home",onClick:function(){t("Home")}},l.a.createElement("i",{className:"icon-up-open"})))))},v=t(11),N={imagebaseurl:"https://rbhatia46.github.io/",name:"Wesley Chen",role:"Fullstack Developer",roleDescription:"Experienced in React & Rails based programming with a background in project organization.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/wesley-chen-15735b26/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/IdleScV",className:"fa fa-github"},{name:"instagram",url:"https://www.instagram.com/wesleydoesthings/",className:"fa fa-instagram"},{name:"email",url:"mailto:weschen1996@gmail.com",className:"fa fa-envelope"}],aboutme:"I am currently looking for Software Engineer opportunities in the DC metro area while expanding my project base.",address:"Reston, VA",website:"weschen1996@gmail.com",education:[{UniversityName:"Flatiron School",specialization:"Immersive Software Engineer Boot Camp",MonthOfPassing:"May",YearOfPassing:"2020",Location:"Washington, DC"},{UniversityName:"Montgomery College",specialization:"Associates in Business Management",MonthOfPassing:"Aug",YearOfPassing:"2019",Location:"Rockville, MD"},{UniversityName:"International Culinary Center",specialization:"Professional Culinary Arts",MonthOfPassing:"March",YearOfPassing:"2017",Location:"New York, NY"}],skillsTypes:[{type:"Techinical Languages",names:["CSS","HTML5","Javascript","Python","Ruby"]},{type:"Development Tools",names:["Express","Git","jQuery","Rails","React","Redux"]},{type:"Operating Systems",names:[" Linux (Ubuntu)","OS X(Yosemite to Catalina)","Windows (XP, 7, 8, 10)"]}],portfolio:[{name:"Path",description:"View and create timelines for real or fictional people. Get to know what a person did and what they lived through. ",imgurl:"images/portfolio/phone.jpg",github:{front:"https://github.com/IdleScV/mod5_frontend",back:"https://github.com/IdleScV/mod5_backend"}},{name:"Draw-Off",description:"A fun and collaborative party game where up to 8 players are given interesting prompts to draw and rate.",imgurl:"images/portfolio/project.jpg",github:{front:"https://github.com/IdleScV/mod4_frontend",back:"https://github.com/IdleScV/mod4_backend"}},{name:"Code Wars",description:"A coding challenge game where players compete 1 on 1 to see who solves the algorithm first.",imgurl:"images/portfolio/project2.png",github:{front:"https://github.com/IdleScV/MOD-3-Project",back:"https://github.com/bumbot/mod3project"}},{name:"Zombo",description:"A CLI based Zombie survival game that uses a variety of minigames for the player to defeat zombies.",imgurl:t.n(v).a,github:{front:"https://github.com/IdleScV/ZOMBO"}}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]};var b=function(){var e=Object(n.useState)("Home"),a=Object(c.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",{className:"App"},l.a.createElement(m,{resumeData:N,currentPageSet:r,currentPage:t}),l.a.createElement(d,{resumeData:N,currentPageSet:r}),l.a.createElement(E,{resumeData:N,currentPageSet:r}),l.a.createElement(f,{resumeData:N,currentPageSet:r}),l.a.createElement(g,{resumeData:N,currentPageSet:r}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,t){e.exports=t.p+"static/media/profilepic.d43e8d97.jpg"}},[[13,1,2]]]);
//# sourceMappingURL=main.5289efdf.chunk.js.map