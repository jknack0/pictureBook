import axios from 'axios'
const baseUrl = '/api/postimage'
const config = { headers: { 'Content-Type': 'multipart/form-data' } }

const postImage = (newPostObject) => {
  const request =  axios.post(baseUrl, newPostObject, config)
  return request.then(response => response.data)
}

export default {postImage}