import React,{useEffect} from 'react'
import TitleComponent from '../../utilities/TitleComponent/TitleComponent';
import { EDUCATION, TOTAL_SCREENS,GET_SCREEN_INDEX } from '../../utilities/utils';
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
      if(screen.fadeInScreen!==props.id)
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
                <div className='experience-content-holder'>
                  <div className='style-div-container'>
                      <div className='style-div div1-height' >
                      </div>
                      <div className='style-div div1-height' >
                      </div>
                      <div className='style-div div1-height' >
                      </div>
                      </div>
                    {
                        EDUCATION.map((experience)=>(
                          <div>
                            <ExperienceHolder title={experience.degree} 
                            duration={experience.duration} 
                            organization={experience.institute}
                            grade={experience.grade}
                            courses= {experience.courses}
                            downloadAvailable= {experience.downloadAvailable}
                          />
                            <div className='style-div-container'>
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
