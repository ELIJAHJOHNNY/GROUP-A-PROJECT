import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Error.css'

const Error = () => {
    const navigate = useNavigate()
    function backHome(){
        navigate('/Home');
    }

  return (
    <div>
        <h1>Page Not Found</h1>
        <button onClick={backHome}> ← Back Home</button>
    </div>
  )
}

export default Error