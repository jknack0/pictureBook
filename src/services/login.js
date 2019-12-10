import axios from 'axios'
const baseUrl = '/api/login'

const login = (loginObject) => {
  const request =  axios.post(baseUrl, loginObject)
  return request.then(response => response.data)
}

export default {login}
