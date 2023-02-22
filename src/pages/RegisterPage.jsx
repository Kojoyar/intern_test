import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContextProvider';

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
          <input name='username' placeholder='Username' type='text' onChange={e => setUsername(e.target.value)}  />
          <input id='pw' name='password' placeholder='Password' type='password' onChange={e => setPassword(e.target.value)} />
          <input name='email' placeholder='E-Mail Address' type='text'/>
          <div class='agree'>
            <input id='agree' name='agree' type='checkbox'/>
            <label for='agree'></label>Accept rules and conditions
          </div>
          <input onClick={() => register(username, password)} class='animated' type='submit' value='Register'/>
        </div>
      </div>
    </div>
    </>
)
}

export default RegisterPage