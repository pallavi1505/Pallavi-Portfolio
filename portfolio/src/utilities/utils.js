import AboutMe from '../ContentContainer/AboutMe/AboutMe';
import Home from '../ContentContainer/Home/Home';
import Work from '../ContentContainer/WorkHistory/Work';
import Education from '../ContentContainer/Education/Education';
import Skill from '../ContentContainer/Skill/Skill';

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
    }
    ,
    {
        screen_name:"Skill-Set",
        component: Skill
    }
    ,
    {
        screen_name:"Education",
        component: Education
    }
    ,
];

export const GET_SCREEN_INDEX = (screen_name) =>
{
    if (!screen_name)
    {
        return -1
    }

    for(let i=0;i<TOTAL_SCREENS.length;i++)
    {
        if(TOTAL_SCREENS[i].screen_name === screen_name)
        {
            return i;
        }
    }
    return -1;

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

export  const EDUCATION = [
    {
        degree:"Master of Science in Computer Science",
        institute: "University of North Carolina at Charlotte",
        duration:"Aug 2021 - May 2023",
        grade:"Cgpa: 3.75/4.0",
        courses:[],
    },
    {
        degree:"Post Graduate Diploma in Digital Computing",
        institute: "CDAC, Pune",
        duration:"Aug 2017 - Mar 2018",
        grade:"A Grade",
        courses:[],
    },
    {
        degree:"Bachelor of Engineering, Computer Science",
        institute: "Shivaji University, India",
        duration:"Aug 2012 - May 2016",
        grade:"Cgpa: 3.6/4.0",
        courses:[],
    }
    
];

export const SKILLS = [
    {
        type:"Languages",
        items: [
            {
                name:"Python",
                image:"python"
            },
            {
                name:"Java",
                image:"java"
            },
            {
                name:"JavaScript",
                image:"javascript"
            },
            {
                name:"TypeScript",
                image:"typescript"
            },
            {
                name:"C#",
                image:"csharp"
            },
            
            {
                name:"SQL",
                image:"sql"
            }
        ]
    },   
    {
        type:"Web Technologies",
        items: [
            {
                name:"React",
                image:"react"
            },
            {
                name:"Angular",
                image:"angular"
            },
            {
                name:"Node",
                image:"node"
            },
            {
                name:"HTML",
                image:"html"
            },
            {
                name:"CSS",
                image:"css"
            },
        ]
    },
    {
        type:"Frameworks & Tools",
        items: [
            {
                name:"Visual Studio",
                image:"vs"
            },
            {
                name:"Visual Studio Code",
                image:"vsc"
            },
            {
                name:"Xamarin",
                image:"xamarin"
            },
            {
                name:"Xcode",
                image:"xcode"
            },
            {
                name:"GitHub",
                image:"github"
            },
            {
                name:"Jupyter",
                image:"jupyter"
            },
        ]
    },    
];