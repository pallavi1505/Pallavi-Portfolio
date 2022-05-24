import './Award.css';
import React,{useEffect} from 'react'
import TitleComponent from '../../utilities/TitleComponent/TitleComponent';
import { AWARDS, GET_SCREEN_INDEX, TOTAL_SCREENS } from '../../utilities/utils';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import Carousel from 'react-elastic-carousel'
import AwardItem from './AwardItems/AwardItem';

export default function Award(props) {
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
    <div className='award-container' id={props.id || ""}>
        <div className='award-parent'>
          <TitleComponent title={"Awards"} subTitle={`My accomplishments....`} leftMargin={leftMargin()} width={componentWidth()}/>
            <div className='award-content-parent-conatiner'>
            <Carousel itemsToShow={1}>
              {AWARDS.map((award) =>(
                <AwardItem name={award.name}/>
              ))}
            </Carousel>
            </div>
        </div>
    </div>
  )
}
