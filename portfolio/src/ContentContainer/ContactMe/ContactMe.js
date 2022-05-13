import React,{useEffect} from 'react'
import TitleComponent from '../../utilities/TitleComponent/TitleComponent';
import { EDUCATION, TOTAL_SCREENS,WORK_EXPERIENCE,GET_SCREEN_INDEX } from '../../utilities/utils';
import './ContactMe.css';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import ExperienceHolder from '../WorkHistory/ExperienceHolder/ExperienceHolder';

export default function ContactMe(props) {
  let leftMargin = () =>{
    let margin = parseInt(100 / TOTAL_SCREENS.length) * GET_SCREEN_INDEX(props.id);
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
    <div className='contact-container' id={props.id || ""}>
      <div className='contact-parent-container'>
        <TitleComponent title={"Contact Me"} subTitle={`My Educational journey until now .... `} leftMargin={leftMargin()} width={componentWidth()}/>
        <div className='contact-content-conatiner'>
           <div className='contact-content'>
             <div className='contact-parent-container'>
              <div className='contact-me-content'></div>
              <div className='let-me-contact-you-content'></div>
             </div>
           </div>
        </div>
    </div>
</div>
  )
}
