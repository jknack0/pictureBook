import React, {useState} from 'react'
import registerServices from '../services/register'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value)
  }

  const submitRegistrationData = (event) => {
    event.preventDefault()

    if(password !== repeatPassword) {
      alert('Passwords do not match')
    } else {
      const registerObject = {
        username: username,
        email: email,
        password: password
      }
      registerServices.register(registerObject)
        
    }
  }

  return (
    <div className="form-container">
      <h2>Registration</h2>
      <form onSubmit={submitRegistrationData}>
        <label htmlFor="username">Username:</label> <br />
        <input type="text" id="username" placeholder='Username' 
               onChange={handleUsernameChange} value={username} required/> <br />
        <label htmlFor="email">Email:</label> <br />
        <input type="email" id="email" placeholder='Email' 
               onChange={handleEmailChange} value={email} required/> <br />
        <label htmlFor="password">Password:</label> <br />
        <input type="password" id="password" placeholder='Password' 
               onChange={handlePasswordChange} value={password} required /> <br />
        <label htmlFor="confirmPassword">Confirm Password:</label> <br />
        <input type="password" id="confirmPassword" placeholder='Repeat Password' 
               onChange={handleRepeatPasswordChange} value={repeatPassword} required /> <br />
        <label htmlFor="ageLimit">Over 13+ years old</label>
        <input type="checkbox" id="ageLimit" required /> <br />
        <label htmlFor="termsOfServiceCheckbox">Accept Terms of Service</label>
        <input type="checkbox" id="termsOfService" required /> <br />
        <input type="submit" name="Register" id="submit"/>
      </form>
    </div>
  )
}

export default Register