import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContextProvider';
import '../styles/Register.css'

const RegisterPage = () => {
   const [username, setUsername] = useState()
   const [password, setPassword] = useState()

   const {register, error} = useAuth()

  return (
    <>
    <div>
      {error? (
        <h3>{error}</h3>
      ) : (
        ''
      )}
      <div className="body">
        <div class='login'>
          <h2 className='reg-title'>Register</h2>
          <div>
            <input className='reg_inp' name='username' placeholder='Username' type='text' onChange={e => setUsername(e.target.value)}  />
          </div>
         <div>
          <input className='reg_inp' id='pw' name='password' placeholder='Password' type='password' onChange={e => setPassword(e.target.value)} />
         </div>
          <input className='reg_inp' name='email' placeholder='E-Mail Address' type='text'/>
          <div class='agree'>
            <input id='agree' name='agree' type='checkbox'/>
            <label for='agree'></label>Accept rules and conditions
          </div>
          <button className='reg_btn' onClick={() => register(username, password)} >Register</button>
        </div>
      </div>
    </div>
    </>
)
}

export default RegisterPage