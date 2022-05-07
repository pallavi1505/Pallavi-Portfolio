import React from 'react'
import Typical from 'react-typical'

export default function Home() {
    return (
        <div className='home-container'>
            <div className='home-parent'>
                <div className='home-details'>
                    <div className='colz'>
                        <a href='https://www.linkedin.com/in/pallavi-shirodkar-1505/'>
                            <i class="fa fa-linkedin-square"></i>
                        </a>
                        <a href='https://github.com/pallavi1505'>
                            <i className='fa fa-github-square'></i>
                        </a>
                        <a href='https://www.facebook.com/pallavi.shirodkar.144/'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.instagram.com/pallavi_theshirodkar/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                    </div>

                    <div className='home-details-name-intro'>
                        <span className='primary-text'>
                            {" "}
                            Hello! I am <span className='highlighted-text'>Pallavi</span>!
                        </span>
                    </div>

                    <div className='home-details-role-intro'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                               
                            </h1>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

