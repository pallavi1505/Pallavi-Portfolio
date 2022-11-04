import AboutMe from '../ContentContainer/AboutMe/AboutMe';
import Home from '../ContentContainer/Home/Home';
import Work from '../ContentContainer/WorkHistory/Work';
import Education from '../ContentContainer/Education/Education';
import Skill from '../ContentContainer/Skill/Skill';
import ContactMe from '../ContentContainer/ContactMe/ContactMe';
import Award from '../ContentContainer/Awards/Award';

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
    {
        screen_name:"Awards",
        component: Award
    }
    ,
    {
        screen_name:"Contact Me",
        component: ContactMe
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
        title:"Graduate Teaching Assistant",
        organization: "University of North Carolina at Charlotte",
        duration:"Aug 2022 - Present",
        work:["-Subject: Software System Design and Implmentation at UNC Charlotte",
        "-Assisted professor with revising course syllabus.",
        "-Assisted professor with grading student's assignments.",
        "-Solved students' doubts around class assignments.",
        "-Helped in grading project solutions."],
    },
    {
        title:"SDE Intern Summer 2022",
        organization: "Slalom Build",
        duration:"Jun 2022 - Aug 2022",
        work:['-Working as a Full Stack Developer on “Slalom Cards” Platform using Angular, AWS Lambda and Dynamodb.',
            '-Working on Search and Advanced Search Functionality Results to be shown with Pagination.',
            '-Working with a dyanamic team of 4 people using Agile Methodology for Project Development.'],
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
        grade:"Cgpa: 3.83/4.0",
        courses:['Algorithms and Data Structures',',',' Database Systems',',',' Software System Design and Implementation',',',' Network Based Design',',',' Knowledge Discovery in Databases',',',' Big Data Analytics in Competitive Analytics',',',' Intelligent Systems',',',' Computer Communications and Networks',',',' System Integration'],
        downloadAvailable: ''
    },
    {
        degree:"Post Graduate Diploma in Digital Computing",
        institute: "CDAC, Pune",
        duration:"Aug 2017 - Mar 2018",
        grade:"A Grade",
        courses:[],
        downloadAvailable: ''
    },
    {
        degree:"Bachelor of Engineering, Computer Science",
        institute: "Shivaji University, India",
        duration:"Aug 2012 - May 2016",
        grade:"Cgpa: 3.6/4.0 (Source: WES)",
        courses:[],
        downloadAvailable: 'https://drive.google.com/file/d/1HJpxD4nKy45zxB-7awRGrN9J4j47l0yC/view?usp=sharing'
    }  
];

export const SKILLS = [
    {
        type:"Languages",
        items: [
            {
                name:"Python",
                image:"https://drive.google.com/uc?export=view&id=1ms1zmrOLP-sHuI2nck5WJqDsjrmhRIop"
            },
            {
                name:"Java",
                image:"https://drive.google.com/uc?export=view&id=1JJa6x5Ou7YiU4-uJ8D5MHFCWTvtgCeSd"
            },
            {
                name:"JavaScript",
                image:"https://drive.google.com/uc?export=view&id=13BdSU4rU_W-cR11xI1CznE7OIr0Fwgg6"
            },
            {
                name:"TypeScript",
                image:"https://drive.google.com/uc?export=view&id=1Q6IxZq9XJNQ7rzR3LSGeKtKds70yEOzx"
            },
            {
                name:"C#",
                image:"https://drive.google.com/uc?export=view&id=12CaLK8-GfltYWx0tDaKkPRYeP5tMTWSa"
            },
            
            {
                name:"SQL",
                image:"https://drive.google.com/uc?export=view&id=1jdjaQXUEb-yGwEgcwqK7CykG-qx-64sS"
            }
        ]
    },   
    {
        type:"Web Technologies",
        items: [
            {
                name:"React",
                image:"https://drive.google.com/uc?export=view&id=1ZEjU0RqHF2DyQnaNhbUL_tR23TNIMnbV"
            },
            {
                name:"Angular",
                image:"https://drive.google.com/uc?export=view&id=18qyqzPZJ3CBj9aObtzRfgCFrU9HtyWuG"
            },
            {
                name:"Node",
                image:"https://drive.google.com/uc?export=view&id=1Ml_egz5fP09c6Wt1BQtmBHD2lUDAOUTW"
            },
            {
                name:"HTML",
                image:"https://drive.google.com/uc?export=view&id=1VY0I9YO1pOKHZrt_6u9kuiad3ZWiZTaL"
            },
            {
                name:"CSS",
                image:"https://drive.google.com/uc?export=view&id=1z_aXaHLO2vCvaRdPJsBc-j3LQJbqwlEz"
            },
        ]
    },
    {
        type:"Frameworks & Tools",
        items: [
            {
                name:"Visual Studio",
                image:"https://drive.google.com/uc?export=view&id=1T1NsCJvIEU0ngi3v-j19RHfYswYgs3lC"
            },
            {
                name:"Visual Studio Code",
                image:"https://drive.google.com/uc?export=view&id=1VjtzBjjasaTQYdNMGk-w5KQVNWZiGgZ_"
            },
            {
                name:"Xamarin",
                image:"https://drive.google.com/uc?export=view&id=1ZISwBZGYDpUgLDOW2eJdsoMKPCov1oXG"
            },
            {
                name:"Xcode",
                image:"https://drive.google.com/uc?export=view&id=1ulHm3rQoV2V4cajR4sAHV_1vTQNIWh8e"
            },
            {
                name:"GitHub",
                image:"https://drive.google.com/uc?export=view&id=1omH8jcWW9THvsyoAiHlxmIIAuDYEfUc5"
            },
            {
                name:"Jupyter",
                image:"https://drive.google.com/uc?export=view&id=1IeCpyZEHVVIo99P3hNhWIwMMSAYKaP7a"
            },
        ]
    },    
];

export  const AWARDS = [
    {
        name:"Awesome Award",
        organization: "Schlumberger",
        duration:"Jul 2020 - Sep 2020",
        purpose:[
        'In Q3 of 2020, when "Work-From-Home" culture began I simultaneously worked on 3 live projects - "eClaims" in which I worked as a front-end developer - I created reusable templates in React, "MDM Wells" for integrating Google Map APIs - where I created reusable Components in Angular and in "eClaims" Mobile Application Developer working in Xamarin - integrating one required feature into an existing application. I also collaborated with the Backend and QA team. I was not only successfully able to work simultaneously on many frontlines but I also delivered my deliverables within the given timeframe that required minimum QA efforts.'
        ],
        image:"https://drive.google.com/uc?export=view&id=14OC2-S4tErciUigKi0F-389r8US8Pqk4"
    },
    {
        name:"Well Done Award",
        organization: "Schlumberger",
        duration:"Oct 2019 - Dec 2019",
        purpose:[`One of the valued products of Schlumberger's Digital Productivity Services Team are "eClaims" and "ApproveBuddy". I participated in eClaims's and ApproveBuddy's phases right from its genesis to its completion. I single handedly developed the Business logic of the applications along with their User Interfaces for the iOS in Xamarin. With no lead developer present at the given moment, I looked after both the applications' end-to-end development and collaborated with various teams.`,`I was recognized for my Leadership, Dedication and Collaboration efforts in the Projects`],
        image:"https://drive.google.com/uc?export=view&id=1kyga9NAL6QdadTxhRVdGJ0HkTLRchvjH"
    },
    {
        name:"Merit Scholarship",
        organization: "Shivaji University, India",
        duration:"Apr 2016 - Present",
        purpose:['Shivaji University granted me a Merit Scholarship for Academic Year 2015-2016, in the Third Year of My Engineering course for showcasing Consistent Academic Excellence and Representing Shivaji University at National Level Badminton Tournaments for consecutive 3 Years.'],
        image:"https://drive.google.com/uc?export=view&id=17r5bVzh-K-JiPtsENEiyckK1DHibWiKx"
    }
];