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
            <div className='organization-text'>{props.organization}</div>
            <div className='grade-text'>{props.grade}</div>
          </div>

          {props.work? (
            <div className='work-row'>
            {props.work.map((role)=>(
              <div className='role-style'>
                <div className='role-text'>{role}</div>
              </div>
            ))}
          </div>
          ) :(null)}
          
          {props.courses? 
          (
            <div className='course-row'>
                {props.courses.map((course)=>(
                  <span className='course-style'>{course}</span>
                )) }
            </div>
          ): 
          (
            null
          )}

          {props.downloadAvailable? 
          (
            <div className='download-row'>
                <a href={props.downloadAvailable} download="Pallavi Shirodkar Undergraduate Transcripts.pdf">
                  <button className='btn highlighted-btn'>
                    {" "}
                    Transcripts <i className='fa fa-download'/>
                  </button>
                  </a>
            </div>
          ): 
          (
            null
          )}
        </div>
    </div>
  )
}
