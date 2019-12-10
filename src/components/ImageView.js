import React from 'react'
import Comments from './Comments'

const ImageView = ({match}) => {
  const imageUrl = `/images/img.png`
  return(
    <div className='image-view-body'>
      <h2>Image Title</h2>
      <img src={imageUrl} alt='image the user posted' />
      <p>This is going to be the image description from the database.</p>
      <Comments />
    </div>
  )
}

export default ImageView