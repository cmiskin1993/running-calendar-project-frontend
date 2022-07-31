import React from 'react'

const Login = () => {


  return (
    <div>
          <h2>Login</h2>
            <form id="form-container">
              <div>
              <label htmlFor='username'>Username: </label>
              <input type='text' name='username' id='username' />
              </div>
              <input type="submit" value='Login' />
            </form>
    </div>
  )
}

export default Login