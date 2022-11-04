import React from 'react'
import Typical from 'react-typical'
import Header from './Header/Header';
import './Home.css';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

export default function Home(props) {
    let fadeInHandler= (screen) =>{
        if(screen.fadeInScreen!==props.id)
        {
            return
        }
        Animations.animations.fadeInScreen(props.id)
    }
  
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInHandler);

    return (
        <div className='home-container' id={props.id || ""}>
            <Header/>
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
                               <Typical 
                               loop={Infinity}
                               steps={[
                                   "Full Stack Developer", 2000,
                                   "Cross Platform Developer", 2000,
                                   "Problem Solver", 2000
                               ]}
                               />
                            </h1>
                        </span>
                    </div>

                    <div className='home-details-role-details'>
                        <span className='primary-text'>
                        <p>3+ years of Professional Experience.<br/>
                        Graduate Student at UNC Charlotte. Graduate Teaching Assistant<br/>
                        Ex-Schlumberger, Pune, India.<br/>
                        SDE Intern, Slalom Build, Charlotte, US.</p>
                        </span>
                    </div>

                    <div className='home-options'>
                        <a href='https://drive.google.com/file/d/19Phd93JTEW97gX9wOQfCSphQq1MR-GXy/view?usp=sharing' download="Pallavi Shirodkar Resume.pdf">
                            <button className='btn highlighted-btn button-parent'>
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
            <div className='image-parent'>
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 250" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 128.71428571428572,184.75 257.42857142857144,169.5 367,154 C 476.57142857142856,138.5 567,122.75 672,139 C 777,155.25 896.5714285714287,203.5 1027,219 C 1157.4285714285713,234.5 1298.7142857142858,217.25 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#ffffffff" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
            </div>
        </div>
    )
}

