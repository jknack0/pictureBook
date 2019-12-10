import React from 'react'
import {Link} from 'react-router-dom'

const ImageTile = () => {
  return (
    <Link to='postview/1'>
      <div className='image-tile'>
        <h2>Image Title</h2>
        <img src='./images/img.png' alt='image the user posted' />
      </div>
    </Link>
  )
}

export default ImageTile