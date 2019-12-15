import React, {useState, useEffect} from 'react'
import Comments from './Comments'
import imageViewServices from '../services/imageView'
import imageView from '../services/imageView'

const ImageView = ({match}) => {
  const [post, setPost] = useState([])
  
  useEffect(() => {
    window.scrollTo(0,0)
    imageViewServices.getPost(match.params.id, setPost)
  },[])

  console.log(post)
  
  return(
    <div className='image-view-body'>
      <h2>{post.title}</h2>
      <img src={post.photopath} alt='the user posted' />
      <p>{post.description}</p>
      <Comments postId={post.id} />
    </div>
  )
}

export default ImageView