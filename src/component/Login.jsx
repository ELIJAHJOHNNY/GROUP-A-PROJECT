import '../styles/Login.css';
import Footer from './Footer';

function Login() {
  return (
    <div className="App">
    <head>
       
        <title>Netflix SignIn Page Clone</title>
    </head>
    <body>
        <div class="login-container">
            <div class="form-container">
                <form>
                    <h1>Sign In</h1>
                    <div class="form-group">
                        <input type="text" required></input>
                        <label>Email or phone number</label>
                    </div>
                    <div class="form-group">
                        <input type="password" required></input>
                        <label>Password</label>
                    </div>
                    <button>Sign In</button>
                    <div class="remember">
                        <div class="left">
                           <input type="checkbox" id="remember"/>
                            <label for="remember"> Remember Me</label>
                        </div>
                        <div class="right">
                            <a href="/Home">Need help?</a>
                        </div>
                    </div>
                    <div class="signup">
                        <p>New to Netflix? <a href="/Home">Sign up now</a>.</p>
                    </div>
                    <p class="captcha">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                        <a href="/Home">Learn more</a>. 
                        {/* Ignore the hrefs for now */}
                    </p>
                </form>
            </div>
           
        </div>
    </body>
     <Footer/>
    </div>
  );
}

export default Login;
