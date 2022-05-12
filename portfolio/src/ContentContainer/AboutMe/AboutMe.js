import React from 'react'
import TitleComponent from '../../utilities/TitleComponent/TitleComponent';
import { TOTAL_SCREENS } from '../../utilities/utils';
import './AboutMe.css';

export default function () {
  let leftMargin = () =>{
    let margin = 100 / TOTAL_SCREENS.length;
    return margin;
  }

  let componentWidth = ()=>{
    let width = (1 / TOTAL_SCREENS.length) *100;
    return width;
  }

  return (
    <div>
        <TitleComponent title={"About Me"} subTitle={`"Pallavi" in a Nutshell.... `} leftMargin={leftMargin()} width={componentWidth()}/>
    </div>
  )
}
