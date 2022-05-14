import React,{useEffect} from 'react'
import TitleComponent from '../../utilities/TitleComponent/TitleComponent';
import { TOTAL_SCREENS,WORK_EXPERIENCE,GET_SCREEN_INDEX } from '../../utilities/utils';
import './Work.css';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import ExperienceHolder from './ExperienceHolder/ExperienceHolder';

export default function Work(props) {
    let leftMargin = () =>{
        let margin = parseInt(100 / TOTAL_SCREENS.length) * GET_SCREEN_INDEX(props.id);
        return margin;
      }
    
      let componentWidth = ()=>{
        let width = (1 / TOTAL_SCREENS.length) *100;
        return width;
      }
    
    let fadeInHandler= (screen) =>{
          if(screen.fadeInScreen!==props.id)
          {
              return
          }
          Animations.animations.fadeInScreen(props.id)
      }
    
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInHandler);
  return (
        <div className='work-container screen-container' id={props.id || ""}>
            <div className='work-parent-container'>
                <TitleComponent title={"Work"} subTitle={`My Professional journey until now .... `} leftMargin={leftMargin()} width={componentWidth()}/>
                <div className='work-content-conatiner'>
                    <div className='work-content'>
                        <div className='experience-content-holder'>
                            <div className='style-div-container'>
                                        <div className='style-div div1-height' >
                                        </div>
                                        <div className='style-div div1-height' >
                                        </div>
                                        <div className='style-div div1-height' >
                                        </div>
                                        <div className='style-div div1-height' >
                                        </div>
                                        <div className='style-div div1-height' >
                                        </div>
                                        <div className='style-div div1-height' >
                                        </div>
                                        <div className='style-div div1-height' >
                                        </div>
                                    </div>
                            {
                                WORK_EXPERIENCE.map((experience)=>(
                                <div>
                                        <ExperienceHolder title={experience.title} 
                                    duration={experience.duration} 
                                    organization={experience.organization}
                                    work={experience.work}
                                />
                                <div className='style-div-container'>
                                        <div className='style-div div2-height' >
                                        </div>
                                        <div className='style-div div2-height' >
                                        </div>
                                        <div className='style-div div2-height' >
                                        </div>
                                        <div className='style-div div2-height' >
                                        </div>
                                        <div className='style-div div2-height' >
                                        </div>
                                        <div className='style-div div2-height' >
                                        </div>
                                        <div className='style-div div2-height' >
                                        </div>
                                        </div>
                                    </div>
                                    
                                    ))
                                }
                            </div>     
                    </div>  
                </div>
            </div>
        </div>
  )
}
