import React from "react";
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
    const [displays, setDisplay] = useState('');
    const [value, setValue] = useState();


    const navigate = useNavigate();
    function Nextpage() {
        navigate('/Help')
    }


    function handleEmailDisplay() {
        setDisplay(
            <div className="fdiv">
                <p className="pageformtexts">We will send you an email with instructions on how to reset your password.</p>
                <input type='email' id='emailTexts' placeholder='name@example.com' required /><br />
                <button className="btns">Email Me</button>
            </div>
        )
    }

    function handleTextDisplay() {
        setDisplay(
            <div className="fdiv">
                <p className="pageformtexts">We will text you a verification code to reset your password. Message and data rates may apply.</p>
                <div className="PhoneInput">
                    <PhoneInput
                        placeholder=""
                        value={value}
                        onChange={setValue}
                        id='inputfone'
                        defaultCountry='NG'
                        required
                    />
                </div>
                <button className="btns">Text Me</button>
            </div>
        )
    }

    useEffect(() => {
        handleEmailDisplay()
    }, [])



    return (
        <section>
            <div className="fullbody fdiv">
                <div className="header headerbox fdiv">
                    <Link to="/"> <img className="header-item header-item1" src={logo} alt="netflix logo" /> </Link>                  
                    <Link to="/Login"> <h2 className="header-item header-item2">Sign In</h2> </Link>                  
                    
                </div>
                <form className="content">
                    <h1 className="top-content">Forgot Email/Password</h1>
                    <p className="pageformtexts">How would you like to reset your password?</p>
                    <div className="inputs fdiv">
                        <input type="radio" onClick={handleEmailDisplay} name="forgotPassword" className="radio" defaultChecked required />
                        <label>Email</label><br></br>
                        <div></div>


                    </div>
                    <div className="inputs fdiv">
                        <input type="radio" onClick={handleTextDisplay} name="forgotPassword" className="radio" required />
                        <label>Text Message(SMS)</label>
                        <div></div>
                    </div>
                    <div className="fdiv"> {displays}  </div>
                    <p className="param"><Link to='#' className="linktext">I don't remember my email or Phone</Link></p>
                </form>
                <div className="recaptchatexts">
                    <h1 className="pageformtext retexts">This page is Protected by Google reCAPTCHA to ensure you're
                        not a bot.<a href="https://www.netflix.com"> <span> Learn more</span> </a></h1>
                </div>
            </div>
        </section>

    )
}

export default ForgotPassword;