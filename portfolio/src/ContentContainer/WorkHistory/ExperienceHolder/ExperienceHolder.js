import React from 'react'
import './ExperienceHolder.css'

export default function (props) {
  return (
    <div className='experience-parent-box'>
        <div className='experience-content-container'>
          <div className='title-duration-row'>
            <div className='title-row'>
              {props.title}
            </div>
            <div className='duration-row'>
              {props.duration}
            </div>
          </div>
          <div className='organization-row'>
            {props.organization}
          </div>
          <div className='work-row'>
            {props.work.map((role)=>(
              <div className='role-style'>
                <div>{role}</div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
