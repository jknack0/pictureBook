import React, {useState, useEffect} from 'react'
import ImageTile from './ImageTile'
import searchStore from '../redux/searchStore'
import galleryServices from '../services/gallery'

const Gallery = () => {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  let filteredPosts = posts.filter(post => post.title.includes(search) || post.description.includes(search))
  
  searchStore.subscribe(() => {
    setSearch(searchStore.getState().search)
  })

  useEffect(() => {
     
  }, [search])

  console.log(search)

  useEffect(() => {
    galleryServices.getPosts(setPosts)
  }, [])

  const displayPosts = () => filteredPosts.map((post, i) => <ImageTile key={i} post={post} />)
  

  console.log(posts)

  return (
    <div className='image-tile'>
      {displayPosts()}
    </div>
  )
}

export default Gallery