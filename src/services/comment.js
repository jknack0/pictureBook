import axios from 'axios'

const baseUrl = '/api/postcomment'
const getCommentUrl = '/api/getcomments/'

const postComment = (postid, commentObject) => {
  axios.post(baseUrl + '/' + postid, commentObject)
  .then(response => {
    console.log(response.body)
  })
  .catch(error => {
    console.log(error)
  })
}

const getComments = (postId, setComments) => {
  console.log(postId)
  axios.get(getCommentUrl + postId)
  .then(response => {
    setComments(response.data)
  })

  
}

export default {postComment, getComments}