import React,{useEffect} from 'react'
import TitleComponent from '../../utilities/TitleComponent/TitleComponent';
import { TOTAL_SCREENS } from '../../utilities/utils';
import './AboutMe.css';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

export default function (props) {
  let leftMargin = () =>{
    let margin = 100 / TOTAL_SCREENS.length;
    return margin;
  }

  let componentWidth = ()=>{
    let width = (1 / TOTAL_SCREENS.length) *100;
    return width;
  }

  let fadeInHandler= (screen) =>{
      if(screen.fadeScreen!==props.id)
      {
          return
      }
      Animations.animations.fadeInScreen(props.id)
  }

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInHandler);

  return (
    <div>
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className='about-me-parent'>
                <TitleComponent title={"About Me"} subTitle={`"Pallavi" in a Nutshell.... `} leftMargin={leftMargin()} width={componentWidth()}/>
                <div className='about-me-content-conatiner'>
                    <div className='about-me-content'></div>
                </div>
            </div>
        </div>
    </div>
  )
}
