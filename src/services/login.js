import axios from 'axios'
import userStore from '../redux/userStore'
import history from '../history'

const baseUrl = '/api/login'

const login = (loginObject) => {
  axios.post(baseUrl, loginObject)
  .then(response => {
   if(response.status === 204) {
      alert('User not found please register')
      history.push('/register')
    } else {
      localStorage.setItem('username', loginObject.username)
      userStore.dispatch({
        type: 'LOGIN_USER',
        data: {
          username: loginObject.username,
          loggedIn: true
        }
      })
      history.push('/')
    }
  })
  .catch(error => {
    console.log(error)
  })
}

export default {login}
