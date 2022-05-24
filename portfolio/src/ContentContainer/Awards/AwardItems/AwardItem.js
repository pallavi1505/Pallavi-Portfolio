import React from 'react'
import './AwardItem.css'
import CallMadeIcon from '@mui/icons-material/CallMade'


export default function AwardItem(props) {
  return (
    <div className='award-item-conatiner'>
        <div className='award-content-parent-conatiner'>
            <div className='award-image-conatiner'>
                <div className='award-image-parent-container'>
                    <div className='award-image-row'>
                        <img className='award-image' src={`../images/${props.image}`}>
                        </img>
                    </div>
                    {/* <div className='award-link'>
                        <CallMadeIcon className='link-color'/>
                    </div>
                     */}
                </div>
            </div>

            <div className='award-content-conatiner'>
                <div className='row1-container'>
                    <span className='row1-text'>{props.name}</span>
                </div>
                <div className='row2-container'>
                    <span className='row2-left-text'>{props.organization}</span>
                    <span className='row2-right-text'>{props.duration}</span>
                </div>
                <div className='row3-container'>
                    <span className='row3-text'>{props.purpose}</span>
                </div>
            </div>
        </div>
    </div>
  )
}
