import React, {useState, useEffect} from 'react'
import commentServices from '../services/comment'

const Comments = ({postId}) => {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

  const handleCommentChange = (event) => {
    setComment(event.target.value)
  }

  useEffect(() => {
    commentServices.getComments(postId, setComments)
  }, [postId])


  const handleComment = (event) => {
    event.preventDefault()
    if(localStorage.getItem('username')){
      const newCommentObject = {
        username: localStorage.getItem('username'),
        comment: comment
      }

      commentServices.postComment(postId, newCommentObject)
      const updatedComments = comments.concat(newCommentObject)
      setComment('')
      setComments(updatedComments)
    } else {
      alert('Please log in to post comments')
      setComment('')
    }
  }

  const displayComments = () => comments.map((comment, index) => <div key={index} className='comment'>{comment.username}: {comment.comment}</div>)

  return (
    <>
      <div className='comments'>
        <h3>Comments</h3>
        {displayComments()}
      </div>
      <div className='comment-form'>
        <form onSubmit={handleComment}>
          <input id='comment-input' type='text' value={comment} onChange={handleCommentChange} placeholder='Enter your comment..' />
        </form>
      </div>
    </>
  )
}

export default Comments