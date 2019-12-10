import React, {useState} from 'react'
import postImageServices from '../services/postImage'
import FormData from 'form-data'
import history from '../history/index'

const PostImage = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
}

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const submitPost = (event) => {
    event.preventDefault()
    
    const formData = new FormData()

    const newPostObject = {
      title: title,
      description: description,
      username: localStorage.getItem('username'),
    }

    formData.append('info', newPostObject)
    formData.append('image', file)
    

    for (var pair of formData.entries()) {
      console.log(pair[0]+ ' - ' + pair[1]); 
    }

    postImageServices
    .postImage(formData)
    .then(() => {

    })
    .catch(error => {
      history.push('/')
      console.log(error)
    })
  }

  return (
    <div className="form-container">
      <h2>Post Image</h2>
      <form onSubmit={submitPost}>
        <label htmlFor="postTitle">Post Title:</label> <br />
        <input type="text" id="postTitle" placeholder='Title' onChange={handleTitleChange} required /> <br />
        <label htmlFor="imageDescription">Description:</label> <br />
        <input type="text" id="imageDescription" placeholder='Description' onChange={handleDescriptionChange} required /> <br />
        <input type="file" id="imageToPost" accept="image/*" onChange={handleFileChange} required /> <br />
        <label htmlFor="acceptUsePolicy">Acceptable Use Policy:</label>
        <input type="checkbox" id="acceptUsePolicy" required /> <br />
        <input type="submit" id="submitButton" />
      </form>
    </div>
  )
}

export default PostImage