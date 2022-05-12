import React from 'react'
import { TOTAL_SCREENS } from '../../../utilities/utils';
import { GET_SCREEN_INDEX } from '../../../utilities/utils';
import ScrollService from '../../../utilities/ScrollService';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [selectedScreen,setSelectedScreen] = useState(0)
  const [headerOption,setShowHeaderOptions] = useState(false)


  const updateCurrentScreenOption = (currentScreen) =>{
    if (!currentScreen || !currentScreen.screenInView)
    {
        return;
    }
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex<0)
    {
        return
    }
  }

    // let currenScreenSubscription = ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreenOption);

    let getHeaderOptions = (screen,i) =>{
        return (
                <div key={screen.screen_name} className={getHeaderOptionsClass(i)} onClick={()=> switchScreen(i,screen)}>
                    <span>{screen.screen_name}</span>
                </div>
            )
    }

    const getHeaderOptionsClass = (index) =>{
        let classes = "header-option"
        if(index<TOTAL_SCREENS.length-1)
        {
            classes+= "header-option-seperator"
        }
        if(selectedScreen === index)
        {
            classes+= "selected-header-option";
        }
        return
    }

    const switchScreen = (index, screen) =>{
        let screenComponent = document.getElementById(screen.screen_name);
        if(!screenComponent)
        {
            return
        }
        screenComponent.scrollIntoView({behavior:"smooth"})
        setSelectedScreen(index)
        setShowHeaderOptions(false)
    }

   return (
    <div>
        <div className='header-container' onClick={()=>setShowHeaderOptions(!headerOption)}>
            <div className='header-parent'>
                <div className='header-hamburger' onClick={()=>setShowHeaderOptions(!headerOption)}>
                    <FontAwesomeIcon className='header-hamburger-bars' icon={faBars} />
                </div>
                <div className='header-logo'>
                    <span>
                        Pallavi`s Portfolio 
                    </span>
                </div>
                {/* <div className={(headerOption)? "header-options show-hamburger-options" :"header-options"}>
                    {getHeaderOptions()}
                </div> */}
                <div className={(headerOption)? "header-options show-hamburger-options" :"header-options"}>
                    {
                        TOTAL_SCREENS.map((screen,index)=>
                            getHeaderOptions(screen, index)
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
