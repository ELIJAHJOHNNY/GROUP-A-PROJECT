import React from "react";
import logo from '../logo.png';
import './PageForm.css';
import { useState } from "react";

function PageForm(props) {
        

    return (
        <>
          <div>
           <div className="formhead">
              <img className="formhead-item formhead-item1" src={logo} alt="" />
              <h2 className="formhead-item formhead-item2">Sign In</h2>
           </div>
           <form className="formbox">
                <p>Step 1 0f 3</p>
                <h1 className="formh1">Create a password to start your membership</h1>
                <h3 className="formh3">Just a few more steps and you're done!
                  We hate paperwork, too.
                </h3>
                <div>
                <input type="email" placeholder="Email" className="forminput" required /><br></br>
                <input type="password" placeholder="Add a Password" className="forminput" required /><br></br>
                <label class="box">Please do not Email me Netflix special offers
                <input type="checkbox" />
                <span class="mark"></span>
                </label>
                </div>
                <button className="formbtn">Next</button>
           </form>
           <div className=' footer4' style={{height:"250px"}}>
                <div className="ftr4-box ">
                    <div className="contact4">
                        <a>Questions? <a href="tel:000-800-040-1843">Contact us
                        </a></a>
                    </div>
                    <div className="ftr4">
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

export default PageForm;