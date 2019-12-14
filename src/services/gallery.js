import axios from 'axios'

const baseUrl = '/api/getposts'

const getPosts = (setPosts) => {
  axios.get(baseUrl)
  .then(response => {
    setPosts(response.data)
  })
  .catch(error => {
    console.log(error)
  })
}

export default {getPosts}