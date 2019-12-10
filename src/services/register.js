import axios from 'axios'
const baseUrl = '/api/register'

const register = (registerObject) => {
  const request =  axios.post(baseUrl, registerObject)
  return request.then(response => response.data)
}

export default {register}