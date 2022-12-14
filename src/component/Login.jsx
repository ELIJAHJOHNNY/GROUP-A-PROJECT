import '../styles/Login.css';
import { useNavigate, Link } from 'react-router-dom';
import Footer from './Footer';

function Login() {
    const navigate = useNavigate();
    function getStarted(e){
        e.preventDefault();
        navigate('/Home')
    }

  return (
    <div className="App">
    {/* <head>
        <title>Netflix SignIn Page</title>
    </head> */}

    <>
        <div className="login-container">
            <div className="form-container">
                <form onSubmit={getStarted}>
                    <h1>Sign In</h1>
                    <div className="form-group">
                        <input type="email" name='text' required/>
                        <label htmlFor='text'>Email or phone number</label>
                    </div>
                    <div className="form-group">
                        <input type="password" name='password' pattern='[0-9]{5}' title='Must be five digits' required/>
                        <label htmlFor='password'>Password</label>
                    </div>
                    <button>Sign In</button>
                    <div className="remember">
                        <div className="left">
                           <input type="checkbox" id="remember"/>
                            <label htmlFor="remember"> Remember Me</label>
                        </div>
                        <div className="right">
                            <Link to="/ForgotPassword">Need help?</Link>
                        </div>
                    </div>
                    <div className="signup">
                        <p>New to Netflix? <Link to="/PageForm">Sign up now</Link>.</p>
                    </div>
                    <p className="captcha">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                        <a href="https://www.netflix.com" target='_blank' rel='noreferrer'> Learn more </a>
                    </p>
                </form>
            </div>
           
        </div>
    </>
     <Footer/>
    </div>
  );
}

export default Login;
