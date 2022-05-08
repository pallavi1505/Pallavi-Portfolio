import React from 'react'
import Typical from 'react-typical'
import './Home.css';

export default function Home() {
    return (
        <div className='home-container'>
            <div className='home-parent'>
                <div className='home-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.linkedin.com/in/pallavi-shirodkar-1505/'>
                                <i class="fa fa-linkedin-square icon-color"></i>
                            </a>
                            <a href='https://github.com/pallavi1505'>
                                <i className='fa fa-github-square icon-color'></i>
                            </a>
                            <a href='https://www.facebook.com/pallavi.shirodkar.144/'>
                                <i className='fa fa-facebook-square icon-color'></i>
                            </a>
                            <a href='https://www.instagram.com/pallavi_theshirodkar/'>
                                <i className='fa fa-instagram icon-color'></i>
                            </a>
                        </div>
                    </div>

                    <div className='home-details-name-intro'>
                        <span className='primary-text'>
                            {" "}
                            Hello! I am <span className='highlighted-text'>Pallavi</span>!
                        </span>
                    </div>

                    <div className='home-details-role-details'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                               {/* <Typical 
                               loop={Infinity}
                               steps={[
                                   "Enthusiastic Developer", 2000,
                                   "Full Stack Developer", 2000,
                                   "Cross Platform Developer", 2000
                               ]}
                               /> */}
                            </h1>
                        </span>
                    </div>

                    <div className='home-details-role-details'>
                        <span className='primary-text'>
                        <p>3+ years of Professional Experience.<br/>
                        Graduate Student at UNC Charlotte. Graduate Teaching Assistant<br/>
                        Ex-Schlumberger, Pune, India.<br/>
                        Incoming SDE Intern, Slalom Build, Charlotte, US.</p>
                        </span>
                    </div>

                    <div className='home-options'>
                        <a href='Pallavi_Resume.pdf' download="Pallavi Shirodkar Resume.pdf">
                        <button className='btn highlighted-btn'>
                        {" "}
                        Download Resume {" "}
                        </button>
                        </a>
                    </div>
                </div>
                <div className='profile-parent-container'>
                    <div className='profile-picture-container'>
                        <div className='profile-picture'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

