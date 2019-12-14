import React, {useEffect} from 'react'
import Comments from './Comments'

const ImageView = ({match}) => {
  const imageUrl = `/images/img.png`
  
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  return(
    <div className='image-view-body'>
      <h2>Image Title</h2>
      <img src={imageUrl} alt='the user posted' />
      <p>This is going to be the image description from the database.</p>
      <Comments />
    </div>
  )
}

export default ImageView