import React, {useState} from 'react'
import { NavLink,useNavigate,useLocation } from "react-router-dom";
import image from "../img/logo.png";
import './Entry.css';

function Log() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
}

const passwordChangeHandler = (e) => {
    setPassword(e.target.value)   
}

const profile = () => {

  const prof = {
      email: email,
      password: password
  }
}

  return (
    
    <div id='back'>
    <form id='box'>
  
    <img id='img' src={image} />

  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" value={email} onChange={emailChangeHandler} placeholder="name@example.com"/>
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" value={password} onChange={passwordChangeHandler} placeholder="Password"/>
    <label class="form-label" for="form2Example2">Password</label>
  </div>
  
  <button type="button" class="btn btn-dark btn-block mb-4" className='btn' onClick={profile}>Log in</button>

  <p id='word'>OR</p>
  <p id='word'>Not registered yet?</p>

  <div id='link'>
      <NavLink to="/sign" className="nav_link">Go to Sign up</NavLink>
  </div>

</form>
</div>
  )
}

export default Log 