import React from 'react'
import './Entry.css';

function Log() {
  return (
    
    <div id='back'>
    <form id='box'>
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Password</label>
  </div>
  
  <button type="button" class="btn btn-dark btn-block mb-4" className='btn'>Log in</button>

  <p id='word'>OR</p>
  <p id='word'>Not registered yet?</p>

  <button type="button" class="btn btn-dark btn-block mb-4" className='btn'>Sign up</button>

</form>
</div>
  )
}

export default Log 