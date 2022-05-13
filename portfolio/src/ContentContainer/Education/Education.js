import React,{useEffect} from 'react'
import TitleComponent from '../../utilities/TitleComponent/TitleComponent';
import { EDUCATION, TOTAL_SCREENS,WORK_EXPERIENCE,GET_SCREEN_INDEX } from '../../utilities/utils';
import './Education.css';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import ExperienceHolder from '../WorkHistory/ExperienceHolder/ExperienceHolder';

export default function Education(props) {
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
    <div className='education-container screen-container' id={props.id || ""}>
    <div className='education-parent-container'>
        <TitleComponent title={"Education"} subTitle={`My Educational journey until now .... `} leftMargin={leftMargin()} width={componentWidth()}/>
        <div className='education-content-conatiner'>
            <div className='education-content'>
                <div className='background-wrapper'>
                    <div className='background-style-div'>
                    </div>
                </div>
                <div className='experience-content-holder'>
                    {
                        EDUCATION.map((experience)=>(
                        <ExperienceHolder title={experience.degree} 
                            duration={experience.duration} 
                            organization={experience.institute}
                            work={experience.courses}
                            grade={experience.grade}
                        />
                        ))
                    }
                </div>     
            </div>  
        </div>
    </div>
</div>
  )
}
