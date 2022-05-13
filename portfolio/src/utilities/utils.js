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
        duration:"Jun 2022 - Aug 2022"
    }
    ,
    {
        title:"Graduate Teaching Assistant",
        organization: "University of North Carolina at Charlotte",
        duration:"Jan 2022 - May 2022"
    },
    {
        title:"Front End Developer and Application Developer",
        organization: "Schlumberger",
        duration:"Mar 2018 - Jul 2021"
    }

];