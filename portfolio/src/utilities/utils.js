import Home from '../ContentContainer/Home/Home';

export  const TOTAL_SCREENS = [
    {
        screen_name:"Home",
        component: Home
    },
    {
        screen_name:"About Me",
        component: Home
    },
    {
        screen_name:"Work History",
        component: Home
    }, 
    {
        screen_name:"Education",
        component: Home
    },
    {
        screen_name:"Awards",
        component: Home
    },
    {
        screen_name:"Contact Me",
        component: Home
    }
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