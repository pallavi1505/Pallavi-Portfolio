import React from 'react'
import './TitleComponent.css';

export default function (props) {
  let marginString = () =>{
    let margin=  ""+String(props.leftMargin)+"%";
    return margin;
  }

  let WidthString = () =>{
    let width=  ""+String(props.width)+"%";
    return width;
  }

  return (
    <div className='title-container'>
        <div className='title-parent'>
            <span className='main-titleText'>{props.title}</span>
            {
                (props.subTitle)?
                    <span className='sub-titleText'>
                        {props.subTitle}
                    </span>
                :
                    <div>
                    </div>
            }
        </div>
        <div className='title-seperator'>
            <div className='title-seperator-line'>
                <div className='title-seperator-blob' style={{marginLeft:marginString()}}>
                    <div style={{width:WidthString()}}></div>
                </div>
            </div>
        </div>
    </div>
  )
}
