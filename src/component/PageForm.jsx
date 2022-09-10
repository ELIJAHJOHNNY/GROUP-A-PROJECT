import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import '../styles/PageForm.css';
// import { useState } from "react";

function PageForm(props) {
        
    return (
        <>
          <div>
           <div className="pageformhead">
            <Link to='/'> <img className="pageformhead-item pageformhead-item1" src={logo} alt="logo" /> </Link>
              <div className="pageformhead-item pageformhead-item2">
                <Link to="/Login" className='text-red-600'>Sign In</Link>
              </div>
           </div>
           <form className="pageformbox1">
                <p className="pageform3">Step <strong className="pageform3">1</strong> of<strong className="pageform3"> 3</strong></p>
                <h1 className="pageform1">Create a password to start your membership</h1>
                <h3 className="pageform2">Just a few more steps and you're done!
                  We hate paperwork, too.
                </h3>
                <div>
                <input type="email" placeholder="Email" className="pageforminputs" required /><br></br>
                <input type="password" placeholder="Add a Password" className="pageforminputs" required /><br></br>
                <label className="box">Please do not Email me Netflix special offers
                <input type="checkbox" className="pageformcheckbox" />
                <span className="mark"></span>
                </label>
                </div>
                <button className="formbtn">Next</button>
           </form>
           <div className='footerpageform1' style={{height:"230px"}}>
                <div className="footerpageform-box ">
                    <div className="pageformcontact">
                        <p>Questions? <a href="tel:000-800-040-1843">Contact us</a></p>
                    </div>
                    <div className="footerpage4">
                        <div>
                            <Link to='/'>FAQ</Link>
                            <br />
                            <br />
                            <Link to="/">Cookie Prefrences</Link>
                        </div>
                        <div>
                            <Link to>Help Center</Link>
                            <br />
                            <br />
                            <Link to="/">Corperate Information</Link>
                        </div>
                        <div>
                            <Link to="/">Terms of Use</Link>
                        </div>
                        <div>
                            <Link to="/">Privacy</Link>
                        </div>
                    </div> 
                </div>
            </div>
           </div>   
        </>
    )
}

export default PageForm;