(this.webpackJsonpmy_portfolio=this.webpackJsonpmy_portfolio||[]).push([[0],{11:function(e,a,t){e.exports=t.p+"static/media/profilepic.d43e8d97.jpg"},13:function(e,a,t){e.exports=t.p+"static/media/zombo.8b270850.PNG"},14:function(e,a,t){e.exports=t(40)},19:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),o=t.n(r),c=(t(19),t(2)),s=t(5),m=t.n(s),i=t(4),u=[.7];var d=function(e){var a=e.resumeData,t=e.currentPageSet,r=e.currentPage,o=Object(i.a)({threshold:u}),s=Object(c.a)(o,2),d=s[0],p=s[1];return Object(n.useEffect)((function(){p&&t("Home")}),[p,t]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"tint"},l.a.createElement("header",{id:"home",ref:d},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"Home"===r?"current":null,onClick:function(){return t("Home")}},l.a.createElement(m.a,{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",{className:"About"===r?"current":null,onClick:function(){return t("About")}},l.a.createElement(m.a,{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",{className:"Resume"===r?"current":null,onClick:function(){return t("Resume")}},l.a.createElement(m.a,{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",{className:"Portfolio"===r?"current":null,onClick:function(){return t("Portfolio")}},l.a.createElement(m.a,{className:"smoothscroll",href:"#portfolio"},"Works")))),l.a.createElement("div",{className:"row banner "},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},a.name),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},a.role,l.a.createElement("br",null),a.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},a.socialLinks&&a.socialLinks.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))}))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement(m.a,{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))))},p=t(11),h=t.n(p),E=[.75];var f=function(e){var a=e.resumeData,t=e.currentPageSet,r=Object(i.a)({threshold:E}),o=Object(c.a)(r,2),s=o[0],m=o[1];return Object(n.useEffect)((function(){m&&t("About")}),[m,t]),l.a.createElement("section",{ref:s,id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:h.a,alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,a.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,a.name),l.a.createElement("br",null),l.a.createElement("span",null,a.address),l.a.createElement("br",null),l.a.createElement("span",null,a.website)))))))},g=[.5];var v=function(e){var a=e.resumeData,t=e.currentPageSet,r=Object(i.a)({threshold:g}),o=Object(c.a)(r,2),s=o[0],m=o[1];return Object(n.useEffect)((function(){m&&t("Resume")}),[m,t]),l.a.createElement("section",{id:"resume",ref:s},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},a.education&&a.education.map((function(e,a){return l.a.createElement("div",{className:"row item",key:a},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Location)))})))),a.work?l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},a.work&&a.work.map((function(e,a){return l.a.createElement("div",{className:"row item",key:a},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))})))):null,l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},a.skillsTypes.map((function(e,a){return l.a.createElement("div",{className:"skill-type",key:a},l.a.createElement("p",null,e.type),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.names.map((function(e,a){return l.a.createElement("li",{key:a},e)})))))})))),l.a.createElement("div",{className:"resume-download"},l.a.createElement("a",{href:a.resumeUrl,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("button",null,l.a.createElement("i",{className:"fa fa-download"})," Detailed Resume"))))},b=(t(20),t(12)),N=t.n(b);var w=function(e){var a=e.item,t=e.i;return l.a.createElement("div",{key:t,className:"moving-item"},l.a.createElement("div",{className:"description"},l.a.createElement("h2",null,a.name),l.a.createElement("p",{className:"project-snippet"},a.description),a.demourl?l.a.createElement("a",{href:a.demourl,alt:"demo-link",className:"demositelink ",target:"_blank",rel:"noopener noreferrer"},"Working Demo Site"):null,l.a.createElement("div",{className:"github"},l.a.createElement("div",{className:"title"},"Want to look at the code? ",l.a.createElement("i",{className:"fa fa-github"})),l.a.createElement("div",{className:"details"},a.github.map((function(e,a){return l.a.createElement("a",{key:a,href:e.url,alt:e.type,className:"githublink",target:"_blank",rel:"noopener noreferrer"},e.type)}))))),l.a.createElement("div",{className:"demo-video"},l.a.createElement(N.a,{controls:!0,width:"100%",height:"220px",id:"youtube-video",url:a.youtubedemo,rel:"noopener noreferrer"})))},y=[.75];var k=function(e){var a=e.resumeData,t=e.currentPageSet,r=Object(i.a)({threshold:y}),o=Object(c.a)(r,2),s=o[0],m=o[1];return Object(n.useEffect)((function(){m&&t("Portfolio")}),[m,t]),l.a.createElement("section",{id:"portfolio",ref:s},l.a.createElement("h1",null,"Check Out Some of My Previous Projects"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{id:"portfolio-wrapper"},a.portfolio&&a.portfolio.map((function(e,a){return l.a.createElement(w,{item:e,key:a})})))))};var P=function(e){var a=e.resumeData,t=e.currentPageSet;return l.a.createElement("footer",null,l.a.createElement("h2",null,"Contact Me Here . . . "),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},a.socialLinks&&a.socialLinks.map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("div",{id:"go-top"},l.a.createElement(m.a,{className:"smoothscroll",title:"Back to Top",href:"#home",onClick:function(){t("Home")}},l.a.createElement("i",{className:"icon-up-open"})))))},O=t(13),S={imagebaseurl:"https://rbhatia46.github.io/",name:"Wesley Chen",role:"Fullstack Developer",roleDescription:"Experienced in React & Rails based programming with a background in project organization.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/wesley-chen-15735b26/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/IdleScV",className:"fa fa-github"},{name:"instagram",url:"https://www.instagram.com/wesleydoesthings/",className:"fa fa-instagram"},{name:"medium",url:"https://medium.com/@weschen1996",className:"fa fa-medium"},{name:"email",url:"mailto:weschen1996@gmail.com",className:"fa fa-envelope"}],aboutme:"I am currently looking for Software Engineer opportunities in the DC metro area while expanding my project base.",address:"Reston, VA",website:"weschen1996@gmail.com",education:[{UniversityName:"Flatiron School",specialization:"Immersive Software Engineer Boot Camp",MonthOfPassing:"May",YearOfPassing:"2020",Location:"Washington, DC"},{UniversityName:"Montgomery College",specialization:"Associates in Business Management",MonthOfPassing:"Aug",YearOfPassing:"2019",Location:"Rockville, MD"},{UniversityName:"International Culinary Center",specialization:"Professional Culinary Arts",MonthOfPassing:"March",YearOfPassing:"2017",Location:"New York, NY"}],skillsTypes:[{type:"Techinical Languages",names:["CSS","HTML5","Javascript","JSON","Python","Ruby","SQL"]},{type:"Development Tools",names:["Express","Firebase","Git","jQuery","Rails","React","Redux"]},{type:"Operating Systems",names:[" Linux (Ubuntu)","OS X(Yosemite to Catalina)","Windows (XP, 7, 8, 10)"]}],portfolio:[{name:"Path",description:"View and create timelines for real or fictional people. Get to know what a person did and what they lived through. ",imgurl:"images/portfolio/phone.jpg",github:[{type:"React Front End",url:"https://github.com/IdleScV/mod5_frontend"},{type:"Rails Back End",url:"https://github.com/IdleScV/mod5_backend"}],demourl:"https://idlescv.github.io/Path_frontend/",youtubedemo:"https://www.youtube.com/watch?v=C0DPdy98e4c"},{name:"Draw-Off",description:"A fun and collaborative party game where up to 8 players are given interesting prompts to draw and rate.",imgurl:"images/portfolio/project.jpg",github:[{type:"React Front End",url:"https://github.com/IdleScV/mod4_frontend"},{type:"Rails Back End",url:"https://github.com/IdleScV/mod4_backend"}],demourl:"https://draw-off-app.herokuapp.com/",youtubedemo:"https://youtu.be/4vn4oCgs-wc"},{name:"Code Wars",description:"A coding challenge game where players compete 1 on 1 to see who solves the algorithm first.",imgurl:"images/portfolio/project2.png",github:[{type:"Vanilla JS Front End",url:"https://github.com/IdleScV/MOD-3-Project"},{type:"Rails Back End",url:"https://github.com/bumbot/mod3project"}],youtubedemo:"https://www.youtube.com/watch?v=C0DPdy98e4c"},{name:"Zombo",description:"A CLI based Zombie survival game that uses a variety of minigames for the player to defeat zombies.",imgurl:t.n(O).a,github:[{type:"Ruby",url:"https://github.com/IdleScV/ZOMBO"}],youtubedemo:"https://www.youtube.com/watch?v=C0DPdy98e4c"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}],resumeUrl:"https://docdro.id/cHOuyCu"};var j=function(){var e=Object(n.useState)("Home"),a=Object(c.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",{className:"App"},l.a.createElement(d,{resumeData:S,currentPageSet:r,currentPage:t}),l.a.createElement(f,{resumeData:S,currentPageSet:r}),l.a.createElement(v,{resumeData:S,currentPageSet:r}),l.a.createElement(k,{resumeData:S,currentPageSet:r}),l.a.createElement(P,{resumeData:S,currentPageSet:r}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.6a3536e8.chunk.js.map