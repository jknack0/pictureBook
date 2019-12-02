import React from 'react'

const Register = () => {
  return (
    <div className="form-container">
      <h2>Registration</h2>
      <form>
        <label for="username">Username:</label> <br />
        <input type="text" id="username" /> <br />
        <label for="email">Email:</label> <br />
        <input type="email" id="email" required/> <br />
        <label for="password">Password:</label> <br />
        <input type="password" id="password" required /> <br />
        <label for="confirmPassword">Confirm Password:</label> <br />
        <input type="password" id="confirmPassword" required /> <br />
        <label for="ageLimit">Over 13+ years old</label>
        <input type="checkbox" id="ageLimit" required /> <br />
        <label for="termsOfServiceCheckbox">Accept Terms of Service</label>
        <input type="checkbox" id="termsOfService" required /> <br />
        <input type="submit" name="Register" id="submit"/>
      </form>
    </div>
  )
}

export default Register