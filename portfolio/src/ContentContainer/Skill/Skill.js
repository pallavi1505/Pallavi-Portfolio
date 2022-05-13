import React,{useEffect} from 'react'
import { SKILLS, TOTAL_SCREENS,GET_SCREEN_INDEX } from '../../utilities/utils';
import './Skill.css';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import TitleComponent from '../../utilities/TitleComponent/TitleComponent';
import SkillHolder from './SkillHolder/SkillHolder';

export default function (props) {
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
        <div className='skill-parent-container'>
            <TitleComponent title={"My Skill Set"} subTitle={`The "Arrows" in my Quiver....`} leftMargin={leftMargin()} width={componentWidth()}/>
            <div className='skill-content-conatiner'>
                <div className='skill-content'>
                    {SKILLS.map((skill)=>(
                        <div>
                            <SkillHolder category={skill.type} items={skill.items}/>
                        </div>
                    ))}
                </div>  
            </div>
        </div>
    </div>
  )
}
