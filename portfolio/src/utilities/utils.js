import AboutMe from '../ContentContainer/AboutMe/AboutMe';
import Home from '../ContentContainer/Home/Home';
import Work from '../ContentContainer/WorkHistory/Work';

export  const TOTAL_SCREENS = [
    {
        screen_name:"Home",
        component: Home
    }
    ,
    {
        screen_name:"About Me",
        component: AboutMe
    }
    ,
    {
        screen_name:"Work",
        component: Work
    },
];

export const GET_SCREEN_INDEX = (screen_name) =>
{
    if (!screen_name)
    {
        return -1
    }

    for(let  i=0;i<TOTAL_SCREENS.length;i++)
    {
        if(TOTAL_SCREENS[i].screen_name === screen_name)
        {
            return i;
        }
        return -1;
    }
}

export  const WORK_EXPERIENCE = [
    {
        title:"Incoming Software Engineer Intern Summer 2022",
        organization: "Salom Build",
        duration:"Jun 2022 - Aug 2022",
        work:[],

    }
    ,
    {
        title:"Graduate Teaching Assistant",
        organization: "University of North Carolina at Charlotte",
        duration:"Jan 2022 - May 2022",
        work:["-Subject: Web-Based Application Design and Development at UNC Charlotte",
        "-Assisted professor with grading student's assignments.",
        "-Solved students' doubts around HTML-CSS-JS.",
        "-Helped in creating project solutions and design ideas."],
    },
    {
        title:"Front End Developer and Application Developer",
        organization: "Schlumberger",
        duration:"Mar 2018 - Jul 2021",
        work:["-Worked on React and Angular projects. Created dynamic template libraries in React.",
            "-Worked on developing User Interface on Xamarin iOS and Xamarin Android.", 
            "-Created Component libraries in Xamarin iOS to be reused by the entire team.", 
            "-Created common business logic in Xamarin using MVVM methodology.",
            "-Migrated legacy web applications into mobile applications.",
            "-Engaged in Agile SCRUM Methodologies and actively participated in all phases of Software Development Life Cycle (SDLC) to build scalable, robust web and mobile applications."],
    }

];