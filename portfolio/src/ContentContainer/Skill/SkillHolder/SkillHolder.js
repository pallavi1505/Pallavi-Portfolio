import React from 'react'
import './SkillHolder.css';

export default function SkillHolder(props) {

  const imageRoute=`../../../assets/Skills/`;

  return (
    <div className='skill-parent-box'>
        <div className='skill-content-container'>
            <div className='category-title-container'>
                <div className='category-title-text'>{props.category}</div>
            </div>
            <div className='category-content-container'>
                {
                    props.items.map((item)=>(
                        <div className='category-content-item'>
                            <img className='item-image' src={`../images/${item.image}.svg`} 
                            title={item.name}
                            ></img>
                            <div className='item-name'>{item.name}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
