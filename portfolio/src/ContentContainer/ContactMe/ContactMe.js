import React,{useState} from 'react'
import TitleComponent from '../../utilities/TitleComponent/TitleComponent';
import { EDUCATION, TOTAL_SCREENS,WORK_EXPERIENCE,GET_SCREEN_INDEX } from '../../utilities/utils';
import './ContactMe.css';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import emailjs from 'emailjs-com';

export default function ContactMe(props) {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[phone, setPhone] = useState("");
  const[message, setMessage] = useState("");
  const[bool, setBool] =useState(false);
  const[banner, setBanner] =useState(false);

  const handleNameChange= (eve) =>{
    setName(eve.target.value);
  }
  const handleEmailChange= (eve) =>{
    setEmail(eve.target.value);
  }
  const handlePhoneChange= (eve) =>{
    setPhone(eve.target.value);
  }
  const handleMessageChange= (eve) =>{
    setMessage(eve.target.value);
  }

  const submitForm= (eve) =>{
    eve.preventDefault();

    emailjs.sendForm("service_69oz2v9", "template_4ejvnc9",eve.target,"ul0AlB_akclHFuQGn").then((res)=>{
      if (res.text ==="OK")
      {
        setBanner("Thank you for contacting me. I will get back to you on your email/phone, soon as possible!")
      }
    }).catch(err=> console.log(err));

    setName("");
      setEmail("");
      setPhone("");
      setMessage("");
  }

  let leftMargin = () =>{
    let margin = parseInt(100 / TOTAL_SCREENS.length) * GET_SCREEN_INDEX(props.id);
    return margin;
  }

  let componentWidth = ()=>{
    let width = (1 / TOTAL_SCREENS.length) *100;
    return width;
  }

  let fadeInHandler= (screen) =>{
      if(screen.fadeInScreen!==props.id)
      {
          return
      }
      Animations.animations.fadeInScreen(props.id)
  }

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInHandler);


  return (
    <div className='contact-container' id={props.id || ""}>
      <div className='contact-parent-container'>
        <TitleComponent title={"Contact Me"} subTitle={`Let's get in touch!`} leftMargin={leftMargin()} width={componentWidth()}/>
        <div className='contact-content-conatiner'>
           <div className='contact-content'>
             <div className='parent-container'>
              <div className='contact-me-content'>
                <div className='contact-propmt'>You can reach out to me @:</div>
                <div className='emails-container'>
                  <div className='contact-title'>Email:</div>
                  <div className='contact-text'>pallavishirodkar1505@gmail.com</div>
                  <div className='contact-text'>pshirod1@uncc.edu</div>
                </div>
                <div className='phone-container'>
                  <div className='contact-title'>Mobile:</div>
                  <div className='contact-text'>+1(980)267-1194</div>
                </div>
              </div>
              <div className='divider-div'></div>
              <div className='let-me-contact-you-content'>
                <div className='horizontal-divider-div-container'>
                  <div className='horizontal-divider-div'></div>
                </div>
                <div className='contact-propmt'>Or, Let me reach out to you!<br/> Please fill out the form and I will get back to you soon as possible!</div>
                <div className='contact-form'>
                <form onSubmit={submitForm}>
                <p className='banner-style'>{banner}</p>
                    <div className='form-input'> 
                      <label htmlFor='name' className='contact-form-prompt contact-text'>Name</label>
                      <div className='input-container'>
                        <input type="text" onChange={handleNameChange} value={name} className='input-style' name='name' placeholder='Type your Name.'/>
                      </div>
                    </div>
                    <div className='form-input form-alignment'>
                      <label htmlFor='email' className='contact-form-prompt contact-text'>Email</label>
                      <div className='input-container'>
                        <input type="text" onChange={handleEmailChange} value={email} className='input-style' name='email' placeholder='Type your Email.'/>
                      </div>
                    </div>
                    <div className='form-input form-alignment'>
                      <label htmlFor='phone' className='contact-form-prompt contact-text'>Phone</label>
                      <div className='input-container'>
                        <input type="text" onChange={handlePhoneChange} value={phone} className='input-style' name='phone' placeholder='Type your contact Number.'/>
                      </div>
                    </div>
                    <div className='form-input form-alignment'>
                      <label htmlFor='message' className='contact-form-prompt contact-text'>Message</label>
                      <div className='input-container'>
                        <textarea type="textarea" onChange={handleMessageChange} rows={3} value={message} name='message' className='input-style' placeholder='Type your Message.'/>
                      </div>
                    </div>
                    <div className='send-button'>
                      <button type='submit' className='btn highlighted-btn'>
                        Send <i className='fa fa-paper-plane'/>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
             </div>
           </div>
        </div>
    </div>
</div>
  )
}
