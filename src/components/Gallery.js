import React, {useState, useEffect} from 'react'
import ImageTile from './ImageTile'
import searchStore from '../redux/searchStore'
import galleryServices from '../services/gallery'

const Gallery = () => {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  
  searchStore.subscribe(() => {
    setSearch(searchStore.getState())
  })

  useEffect(() => {
    
  }, [search])

  useEffect(() => {
    galleryServices.getPosts(setPosts)
  }, [])

  const displayPosts = () => posts.map(post => <ImageTile post={post} />)
  

  console.log(posts)

  return (
    <div className='image-tile'>
      {displayPosts()}
    </div>
  )
}

export default Gallery