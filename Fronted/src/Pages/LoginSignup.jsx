import React, { useState } from 'react'
import './CSS/LoginSignup.css'

function LoginSignup() {

  const [state, setState] = useState("Login");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const login = async () => {
    console.log('Login Done', formData)
    let responseData;
    await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.error)
      console.log(responseData)
    }
  }

  const signup = async () => {
    console.log('Sign Up', formData);
    let responseData;
    await fetch('http://localhost:8000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.error)
      console.log(responseData)
    }
  }

  return (
    <div className='loginsignup' >
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input name='username' value={formData.username} onChange={handleChange} type="text" placeholder='Your Name' /> : <></>}
          <input name='email' value={formData.email} onChange={handleChange} type="email" placeholder='Your Email' />
          <input name='password' value={formData.password} onChange={handleChange} type="password" placeholder='Passsword' />
        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>

        {state === "Sign Up"
          ? <p className='loginsignup-login'>Alrady have an account ? <span onClick={() => { setState("Login") }} style={{ cursor: 'pointer' }}>Login here</span></p>
          : <p className='loginsignup-login'>Create An Account? <span onClick={() => { setState("Sign Up") }} style={{ cursor: 'pointer' }}>Click hear</span></p>}

        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By Continuing, i agree to the terms of use & privecy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup