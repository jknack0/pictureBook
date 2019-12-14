import React, {useState} from 'react'
import loginServices from '../services/login'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const submitLoginData = (event) => {
    event.preventDefault()

    if(username.length < 1 || password.length < 1) {
      alert('Please enter a username and password')
    } else {
      const loginObject = {
        username: username,
        password: password,
      }
      loginServices.login(loginObject)
    }
  }

  return (
    <div className='form-container'>
      <h2>Login</h2>
      <form onSubmit={submitLoginData}>
        <label htmlFor="username">Username:</label> <br />
        <input type="text" id="username" placeholder='Username' onChange={handleUsernameChange} value={username}/> <br />
        <label htmlFor="password">Password:</label> <br />
        <input type="password" id="password" placeholder='Password' onChange={handlePasswordChange} value={password}/> <br />
        <input type="submit" name="Login" id="submit" />
      </form>
    </div>
  )
}

export default Login