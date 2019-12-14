import axios from 'axios'
import history from '../history'

const baseUrl = '/api/postimage'
const config = { headers: { 'Content-Type': 'multipart/form-data' } }

const postImage = (newPostObject) => {
  axios.post(baseUrl, newPostObject, config)
  .then(response => {
    history.push('/')
  })
  .catch(error => {
    console.log(error)
  })
}

export default {postImage}