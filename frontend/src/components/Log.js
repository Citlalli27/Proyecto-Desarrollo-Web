import React, { useContext, useState} from 'react'
import { NavLink,useNavigate,useLocation } from "react-router-dom";
import image from "../img/logo.png";
import './Entry.css';
import AuthContext from "../store/auth-context";
import axios from "axios";

function Log() {

  const [correo,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [errors,setErrors] = useState(false)
  const [errMessage,setErrMessage] = useState("")

  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // authCtx.

  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
}

const passwordChangeHandler = (e) => {
    setPassword(e.target.value)   
}

const profile = () => {

  const prof = {
      correo: correo,
      password: password
  }
}

/*axios.post("http://localhost:4000/login", {
  email: email,
  password: password,
})
.then((response) => {
  console.log(`Respuesta de Login backend: ${response.data.token}`)


  if (response.data.err){
    setErrors(true)
    setErrMessage(response.data.message)
  }
  else {
    authCtx.login(response.data.token,response.data.expiresIn)
    navigate(from,{replace:true})
  }

})
.catch((err) => {
  console.log(err);
});

// authCtx.login()
// navigate(from,{replace:true})
};*/

  return (
    
    <div id='back'>
    <form id='box'>
  
    <img id='img' src={image} />

  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" value={correo} onChange={emailChangeHandler} placeholder="name@example.com"/>
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