import axios from 'axios'
const baseUrl = '/api/register'

const register = (newObject) => {
  const request =  axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

export default {register}