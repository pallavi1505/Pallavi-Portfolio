import React,{useEffect} from 'react'
import TitleComponent from '../../utilities/TitleComponent/TitleComponent';
import { TOTAL_SCREENS } from '../../utilities/utils';
import './AboutMe.css';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import { useState } from 'react';

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

//   let handleShowDialog = (image) => {
//     let src= ""
//     switch(image)
//     {
//         case 1: src= "../../assets/AboutMe/UNC.JPG";
//         break;
//         case 2: src= "../../assets/AboutMe/Mishty.jpg";
//         break;
//         case 3: src= "../../assets/AboutMe/Hike.JPG";
//         break;
//     }
//     console.log(src)
//     setImageSrc(src)
//     setModalState(true)
//   };

//   let handleCloseDialog = () =>{
//     setModalState(false)
//   }

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInHandler);

  return (
    <div>
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className='about-me-parent'>
                <TitleComponent title={"About Me"} subTitle={`"Pallavi" in a Nutshell.... `} leftMargin={leftMargin()} width={componentWidth()}/>
                <div className='about-me-content-conatiner'>
                    <div className='about-me-content'>
                        <div className='about-me-text'>
                        Hello All! I am <span className='highlighted-text'>Pallavi</span>...A Graduate Student at University of North Carolina, Charlotte pursuing Master Of Science in Computer Science. <br/>
                        I am a curious, fun-loving yet dedicated, hardworking developer who loves problem solving and tacking technical problems with my logical and analytical skills. 
                        I have strong leadership abilities and I am also a strong team player.
                        Currently I have 3+ years of experience as a Software Engineer.
                        <br/><br/>
                        Born and brought up in Satara, India. I have completed my undergraduate studying in India.
                        Along with being a coder, I am a professional Badminton player and have represented my University at National Level Badminton Tournaments. 
                        I am a fur-baby mom to 7 cute Cats who now live with my Mom back at home. 
                        I am a fervent Hiker and love to explore Rustic places. 
                        </div>
                        <div className='about-me-image-container'>
                            <div className='parent-container'>
                                <div className='image1'>
                                </div>
                                <span>My First Day at UNC Charlotte!</span>
                            </div>

                            <div className='parent-container'>
                                <div className='image2'>
                                </div>
                                <span>One of my fur babies.."Mishty"</span>
                            </div>

                            <div className='parent-container'>
                                <div className='image3'>
                                </div>
                                <span>One of the hike trials @Catawba</span>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}
