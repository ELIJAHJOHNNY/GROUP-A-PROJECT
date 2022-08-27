import React from "react";
import logo from '../logo.png';
import Devices from '../images/Devices.png';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();
    function form() {
        navigate('/SignupForm')
    }
    return (
        <>
           <div>
           <div className="pagehead">
              <img className="pagehead-item pagehead-item1" src={logo} alt="" />
              <h2 className="pagehead-item pagehead-item2">Sign In</h2>
           </div>
           <div className="infobox">
             <div>
                <img className="pagelogo" src={Devices} alt="devicesLogo"/>
             </div>
             <div className="texts1">
                <p className="steps">STEP <strong>1</strong> OF <strong>3</strong></p>
                <p className="steps2">Finish setting up your account</p>
             </div>
             <div className="texts">
             Netflix is personalized for you. Create a password to watch on any device at any time.
             </div>
             <div>
                <button className="pagebtn" onClick={form}>NEXT</button>
             </div>
           </div>
           <div className=' footer3' style={{height:"250px"}}>
                <div className="ftr-box ">
                    <div className="contact3">
                        <a>Questions? <a href="tel:000-800-040-1843">Contact us
                        </a></a>
                    </div>
                    <div className="ftr3">
                        <div>
                            <a >FAQ</a><br /><br />
                            <a href="#">Cookie Prefrences</a>
                        </div>
                        <div>
                            <a >Help Center</a><br /><br />
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
            </div>
        </>
    )
}

export default SignUp;