import React, {useState, useEffect} from 'react'

const Comments = () => {
  const [comments, setComments] = useState(null)
  const dummyComments = [
    {
      username: 'dummy username',
      comment: 'this is someones dummy comment'
    },
    {
      username: 'dummy username',
      comment: 'this is someones dummy comment'
    },
    {
      username: 'dummy username',
      comment: 'this is someones dummy comment'
    },
    {
      username: 'dummy username',
      comment: 'this is someones dummy comment'
    },
    {
      username: 'dummy username',
      comment: 'this is someones dummy comment'
    },
    {
      username: 'dummy username',
      comment: 'this is someones dummy comment'
    },
    {
      username: 'dummy username',
      comment: 'this is someones dummy comment'
    },
  ]

  useEffect(() => {
    setComments(dummyComments)
  }, [])

  const displayComments = () => 
    comments.map(comment => <div key={comment.username} className='comment'>{comment.username}: {comment.comment}</div>)


  if(comments !== null) {
    return (
      <div className='comments'>
        <h3>Comments</h3>
        {displayComments()}
      </div>
    )
  } else {
    return (
      <div><h2>Loading...</h2></div>
    )
  }
}

export default Comments