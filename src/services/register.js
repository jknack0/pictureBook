import axios from 'axios'
import userStore from '../redux/userStore'
import history from '../history'
const baseUrl = '/api/register'

const register = (registerObject) => {
  axios.post(baseUrl, registerObject)
  .then(response => {
    userStore.dispatch({
      type: 'LOGIN_USER',
      data: {
        username: registerObject.username,
        loggedIn: true
      }
    })
    localStorage.setItem('username', registerObject.username)
    history.push('/')
  })
  .catch(error => {
    history.push('/register')
  })
}

export default {register}