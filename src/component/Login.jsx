import '../styles/Login.css';
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
    <body>
        <div className="login-container">
            <div className="form-container">
                <form onSubmit={getStarted}>
                    <h1>Sign In</h1>
                    <div className="form-group">
                        <input type="text" name='text' required/>
                        <label htmlFor='text'>Email or phone number</label>
                    </div>
                    <div className="form-group">
                        <input type="password" name='password' required/>
                        <label htmlFor='password'>Password</label>
                    </div>
                    <button>Sign In</button>
                    <div className="remember">
                        <div className="left">
                           <input type="checkbox" id="remember"/>
                            <label htmlFor="remember">Remember Me</label>
                        </div>
                        <div className="right">
                            <a href="/ForgotPassword">Need help?</a>
                        </div>
                    </div>
                    <div className="signup">
                        <p>New to Netflix? <a href="/PageForm">Sign up now</a>.</p>
                    </div>
                    <p className="captcha">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                        <a href="https://www.netflix.com" target='_blank'> Learn more </a>
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
