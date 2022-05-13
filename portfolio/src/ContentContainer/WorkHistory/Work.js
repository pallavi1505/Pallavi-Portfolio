import React,{useEffect} from 'react'
import TitleComponent from '../../utilities/TitleComponent/TitleComponent';
import { TOTAL_SCREENS,WORK_EXPERIENCE } from '../../utilities/utils';
import './Work.css';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import ExperienceHolder from './ExperienceHolder/ExperienceHolder';

export default function Work(props) {
    let leftMargin = () =>{
        let margin = parseInt(100 / TOTAL_SCREENS.length);
        return 100- margin;
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
    <div className='work-main-container' id={props.id || ""}>
        <TitleComponent title={"Work Experience"} subTitle={`My professional journey until now...`} leftMargin={leftMargin()} width={componentWidth()}/>
        <div className='work-content-parent-conatiner'>
            <div className='work-card-content'>
                <div className='style-div-container'>
                    <div className='style-div'>
                        <div className='style-div' style={{marginLeft:"6px"}}>
                            <div className='experience-content-holder'>
                                {
                                    WORK_EXPERIENCE.map((experience)=>(
                                        <ExperienceHolder />
                                    ))
                                }
                            </div>                            
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}
