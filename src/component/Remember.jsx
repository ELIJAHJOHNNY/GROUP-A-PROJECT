import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from '../logo.png'
import './Remember.css'

const Remember = () => {
    
const navigate = useNavigate();
function Next() {
    navigate('/')
}

    return(
        <body className="pagebody">
           <div className="head">
              <img className="head-item head-item1" src={logo} alt="" />
              <h2 className="head-item head-item2">Sign In</h2>
           </div>
           <div className="contentbox">
                <h1 className="top-contentbox">Forgot Email/Password</h1>
                <p>Please provide this information to help us find your account (all fields required):</p>
            <div className="inputsbox">
                <label>First name on account</label><br />
                <input type="text"  className="textfield"/>
            </div>
            <div className="inputsbox">    
                <label>Last name on account</label><br />
                <input type="text" className="textfield"/>
            </div>
            <div className="inputsbox">    
                <label>Credit or debit card number on file</label><br />
                <input type="text"  className="textfield"/>
            </div>
            <div>
                <button className="button1"> Find Account</button>
                <button className="button2" onClick={Next} >Cancel</button>
            </div>
           </div> 
           <div className="recaptchabox">
           <p><span className="captchatextsone">This page is Protected by Google reCAPTCHA to ensure you're</span> <br/><span className="captchatexts"> not a bot <Link to="#" className="tolink">Learn more</Link></span></p>
           </div>
           <div className='signupFooter1 footer2' style={{height:"270px"}}>
                <div className="ftr-content1 ftr-content2">
                    <div className="contact2">
                        <a>Questions? <a href="tel:000-800-040-1843">Contact us
                        </a></a>
                    </div>
                    <div className="ftr2">
                        <div>
                            <a onClick={() => navigate("/faq")}>FAQ</a><br /><br />
                            <a href="#">Cookie Prefrences</a>
                        </div>
                        <div>
                            <a onClick={() => navigate("/help")}>Help Center</a><br /><br />
                            <a href="#">Corperate Information</a>
                        </div>
                        <div>
                            <a href="#">Terms of Use</a>
                        </div>
                        <div>
                            <a href="#">Privacy</a>
                        </div>
                    </div>
                    </div>
                    </div>
       
        </body>
    )
}

export default Remember;