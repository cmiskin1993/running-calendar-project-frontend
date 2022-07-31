import React from 'react'
import '../sessions/Forms.css'

const Signup = () => {


  return (

    <div>

      <h2>Create Account</h2>

        <form  id="form-container">
        <div> 
            <label> Username:</label>
            <input type="text" name='username' />
          </div>
          <div> 
            <label> First Name:</label>
            <input type="text" name='firstName' />
          </div>
          <div> 
            <label> Last Name:</label>
            <input type="text" name='lastName' />
          </div>
          <input type="submit" value="Signup"/>
        </form>

    </div>
  )
}

export default Signup