import React from 'react'
import {Link} from 'react-router-dom'

const ImageTile = ({post}) => {
  const imageUri = `..${post.photopath}`
  console.log(imageUri)
  return (
    <Link to='postview/1'>
      <div className='image-tile'>
        <h2>{post.title}</h2>
        <img src={imageUri} alt='This is what the user posted' />
      </div>
    </Link>
  )
}

export default ImageTile