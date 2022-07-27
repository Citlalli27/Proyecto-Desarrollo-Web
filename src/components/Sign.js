import React, {useState} from 'react'
import { Check } from 'react-bootstrap-icons';
import image from "../img/logo.png";
import './Entry.css';
import axios from"axios";

function Sign() {

  const [errors,setErrors] = useState(false)
  const [errMessage,setErrMessage] = useState("")

  const [correo,setCorreo] = useState("")
  const [password,setPassword] = useState("")
  const [userName,setUserName] = useState("")
  const [idioma,setIdioma] = useState("")
  const [moneda,setMoneda] = useState("")

  const correoChangeHandler = (e) => {
    setCorreo(e.target.value)
}

const passwordChangeHandler = (e) => {
    setPassword(e.target.value)
    
}

const userNameChangeHandler = (e) =>{
    setUserName(e.target.value)
}

const idiomaChangeHandler = (e) =>{
    setIdioma(e.target.value)
}

const monedaChangeHandler = (e) =>{
  setMoneda(e.target.value)
}

const addProfile = () => {

    const newProf = {
        correo: correo,
        password: password,
        username: userName,
        idioma: idioma,
        moneda: moneda
    }
  }

  const registerUser = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/users",{
        correo: correo,
        password: password,
        userName: userName,
        idioma: idioma,
        moneda: moneda
    })
    .then(response => {
      console.log(` Response: ${response}`)
      if (response.data.err){
        setErrors(true)
        setErrMessage(response.data.message)
      }
      {/*else {
        console.log("navigate")
            navigate(from,{replace:true})
      }*/}
      setCorreo("")
      setPassword("")
      setUserName("")
      setIdioma("")
      setMoneda("")

    })
    .catch(error => {
      console.log(error)
    })

   // authCtx.login()
   // navigate(from,{replace:true})
  }

  return (
    
    <div id='back'>
    <form id='box'>

    <img id='img' src={image} />

  <div class="form-outline mb-4">
    <input type="email" id="form2Example1 email" class="form-control"  value={correo} onChange={correoChangeHandler} placeholder="name@example.com"/>
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form2Example2 password" class="form-control" value={password} onChange={passwordChangeHandler} placeholder="Password"/>
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <div class="form-outline mb-4">
    <input type="email" id="form2Example1 username" class="form-control" value={userName} onChange={userNameChangeHandler} placeholder="Username"/>
    <label class="form-label" for="form2Example1">Username</label>
  </div>

  <div class="form-outline mb-4">
    <input type="email" id="form2Example1 language" class="form-control" value={idioma} onChange={idiomaChangeHandler} placeholder="English"/>
    <label class="form-label" for="form2Example1">Language</label>
  </div>

  <div class="form-outline mb-4">
    <input type="email" id="form2Example1 currency" class="form-control" value={moneda} onChange={monedaChangeHandler} placeholder="USD/MXN"/>
    <label class="form-label" for="form2Example1">Currency</label>
  </div>
  
  <button type="button" class="btn btn-dark btn-block mb-4" onClick={registerUser}>Sign up</button>

</form>
</div>
  )
}

export default Sign