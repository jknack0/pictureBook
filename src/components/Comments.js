import React, {useState, useEffect} from 'react'

const Comments = () => {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

  const handleCommentChange = (event) => {
    setComment(event.target.value)
  }

  const handleComment = (event) => {
    event.preventDefault()
    
    const newCommentObject = {
      username: localStorage.getItem('username'),
      comment: comment
    }

    const updatedComments = comments.concat(newCommentObject)
    setComment('')

    setComments(updatedComments)

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