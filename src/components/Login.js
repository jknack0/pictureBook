import React from 'react'

const Login = () => {
  return (
    <div className='form-container'>
      <h2>Login</h2>
      <form>
        <label for="username">Username:</label> <br />
        <input type="text" id="username" /> <br />
        <label for="password">Password:</label> <br />
        <input type="password" id="password" /> <br />
        <input type="submit" name="Login" id="submit" />
      </form>
    </div>
  )
}

export default Login