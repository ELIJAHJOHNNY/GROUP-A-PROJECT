import React  from "react";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../styles/ForgotPassword.css';
import 'react-phone-number-input/style.css';
import { useEffect } from "react";
import { useState } from "react";
import logo from '../images/logo.png';
// import { Helmet } from "react-helmet";

const ForgotPassword = () => {
   const [display, setDisplay] = useState('');
   const [value, setValue] = useState();

   const navigate = useNavigate();
   function Next() {
     navigate('/Help')
   }

  function handleEmailDisplay(){
      setDisplay(
      <div>
          <p>We will send you an email with instructions on how to reset your password.</p>
          <input type='email' id='emailText'  placeholder='name@example.com' required/><br /> 
          <button className="btn">Email Me</button>
      </div>
      )
  }

  function handleTextDisplay(){
      setDisplay(
      <div>
          <p>We will text you a verification code to reset your password. Message and data rates may apply.</p>     
          <div className="PhoneInput">
            <PhoneInput 
             placeholder=""
             value={value}
             onChange={setValue}
             id='input'
             defaultCountry='NG'
             required
            
            />
            </div> 
          <button className="btn">Text Me</button>
      </div>
      )
  }

  useEffect(() => {
    handleEmailDisplay()
  }, [])


return (
  <body> 
  <div className="fullbody">
      <div className="header headerbox">
          <img className="header-item header-item1" src={logo} alt="netflix logo" />
          <h2 className="header-item header-item2" onClick={() => navigate('SignUp')}>Sign In</h2>
      </div>
      <form className="content">
          <h1 className="top-content">Forgot Email/Password</h1>
          <p>How would you like to reset your password?</p>
          <div className="inputs">
          <input type="radio" onClick={handleEmailDisplay} name="forgotPassword" className="radio"  required/> 
          <label>Email</label><br></br> 
          <div></div>
          </div>
          <div className="inputs">
          <input type="radio" onClick={handleTextDisplay} name="forgotPassword" className="radio" required/> 
          <label>Text Message(SMS)</label>
          <div></div>
          </div>
          <div> {display} </div>
           <p><Link to='/Help' className="linktext">I don't remember my email or Phone</Link></p>
      </form>
        <div className="recaptcha">
        <p> <span>This page is Protected by Google reCAPTCHA to ensure you're not a bot.</span> <button className="rebtn">Learn more</button></p>
        </div>
        <div className='signupFooter footer' style={{height:"270px"}}>
                <div className="ftr-content ftr-content1">
                    <div className="contact">
                        <a>Questions? <a href="tel:000-800-040-1843">Contact us
                        </a></a>
                    </div>
                    <div className="ftr">
                        <div>
                            <a onClick={() => navigate("/faq")}>FAQ</a><br /><br />
                            <a href="/Home">Cookie Prefrences</a>
                        </div>
                        <div>
                            <a onClick={() => navigate("/help")}>Help Center</a><br /><br />
                            <a href="/Home">Corperate Information</a>
                        </div>
                        <div>
                            <a href="/Home">Terms of Use</a>
                        </div>
                        <div>
                            <a href="/Home">Privacy</a>
                        </div>
                        {/* ignore the hrefs for now */}
                    </div>
                    </div>
                  </div>
                </div>    
       </body>
       
)
}

export default ForgotPassword;