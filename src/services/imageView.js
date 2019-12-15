import axios from 'axios'

const baseUrl = '/api/getpost'

const getPost = (id, setPost) => {
  axios.get(baseUrl + '/' + id)
  .then(response => {
    setPost(response.data[0])
  })
  .catch(error => {
    console.log(error)
  })
}

export default {getPost}