import React, { useState } from 'react'
import './Login.css';
const Login = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  function handleUsername(e){
    setUsername(e.target.value);
  }
  
  function handlePassword(e){
    setPassword(e.target.value);
  }

  return (
    <div className="login-container">
        <h1 className='login-heading'>Login</h1>
        <form className="login-form">
          <input type="text" placeholder="Username" value={username} className="login-input" onChange={handleUsername}/>
          <input type="password" placeholder="Password" value={password} className="login-input" onChange={handlePassword}/>
          <button type="submit" className="login-button" >Login</button>
        </form>
        <p className="signup-text">Don't have an account? <a href="/signup" className="signup-link">Sign up</a></p>
        <p>By continuing, I agree to AV's <a href=''>Privacy policy</a> and <a href=''>Terms of Use</a></p>
    </div>
  )
}

export default Login
