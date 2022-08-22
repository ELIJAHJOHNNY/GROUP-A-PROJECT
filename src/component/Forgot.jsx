// import React from 'react';
// import { useState, useEffect } from 'react';
// import PhoneInput from 'react-phone-number-input';
// import 'react-phone-number-input/style.css'
// import '../styles/Forgot.css'

// THIS IS AN ILLUSTRATION

// const Forgot = () => {
//     const [display, setDisplay] = useState('');
//     const [value, setValue] = useState('');

//     function handleEmailDisplay(){
//         setDisplay(
//         <div>
//             <p>We will send you an email with instructions on how to reset your password.</p>
//             <input type="email" id='emailText' placeholder='name@example.com' /> <br />
//             <button>Email Me</button>
//         </div>
//         )
//     }

//     function handleTextDisplay(){
//         setDisplay(
//         <div>
//             <p>We will text you a verification code to reset your password. Message and data rates may apply.</p>
//             <div className='PhoneInput'>
//                 <PhoneInput
//                 placeholder="Enter phone number"
//                 value={value}
//                 onChange={setValue}
//                 id='input'
//                 defaultCountry='NG'
//                 />
//             </div>                
//             <button>Text Me</button>
//         </div>
//         )
//     }

//     useEffect(() => {
//         handleEmailDisplay()
//     }, [])

//   return (
//     <div>
//         <form>
//             <h1>Forgot Email/Password</h1>
//             <input type="radio" onClick={handleEmailDisplay} name="forgotPassword" id="email" value='email' defaultChecked/>
//             <label htmlFor="email">Email</label> 
//             <br />

//             <input type="radio" onClick={handleTextDisplay} name="forgotPassword" id="text" value='text'/> 
//             <label htmlFor="text">Text Message (SMS)</label>
//             <div> {display} </div> 
//         </form>
//     </div>
//   )
// }

// export default Forgot

// THIS IS AN ILLUSTRATION