import React, {useState} from 'react'
import { Check } from 'react-bootstrap-icons';
import image from "../img/logo.png";
import './Entry.css';

function Sign() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [username,setUsername] = useState("")
  const [language,setLanguage] = useState("")
  const [currency,setCurrency] = useState("")

  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
}

const passwordChangeHandler = (e) => {
    setPassword(e.target.value)
    
}

const usernameChangeHandler = (e) =>{
    setUsername(e.target.value)
}

const languageChangeHandler = (e) =>{
    setLanguage(e.target.value)
}

const currencyChangeHandler = (e) =>{
  setCurrency(e.target.value)
}

const addProfile = () => {

    const newProf = {
        email: email,
        password: password,
        username: username,
        language: language,
        currency: currency
    }
  }

  return (
    
    <div id='back'>
    <form id='box'>

    <img id='img' src={image} />

  <div class="form-outline mb-4">
    <input type="email" id="form2Example1 email" class="form-control"  value={email} onChange={emailChangeHandler} placeholder="name@example.com"/>
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form2Example2 password" class="form-control" value={password} onChange={passwordChangeHandler} placeholder="Password"/>
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <div class="form-outline mb-4">
    <input type="email" id="form2Example1 username" class="form-control" value={username} onChange={usernameChangeHandler} placeholder="Username"/>
    <label class="form-label" for="form2Example1">Username</label>
  </div>

  <div class="form-outline mb-4">
    <input type="email" id="form2Example1 language" class="form-control" value={language} onChange={languageChangeHandler} placeholder="English"/>
    <label class="form-label" for="form2Example1">Language</label>
  </div>

  <div class="form-outline mb-4">
    <input type="email" id="form2Example1 currency" class="form-control" value={currency} onChange={currencyChangeHandler} placeholder="USD/MXN"/>
    <label class="form-label" for="form2Example1">Currency</label>
  </div>
  
  <button type="button" class="btn btn-dark btn-block mb-4" onClick={addProfile}>Sign up</button>

</form>
</div>
  )
}

export default Sign