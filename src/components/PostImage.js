import React from 'react'

const PostImage = () => {
  return (
    <div className="form-container">
      <h2>Post Image</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label> <br />
        <input type="text" id="postTitle" required /> <br />
        <label htmlFor="imageDescription">Description:</label> <br />
        <input type="text" id="imageDescription" required /> <br />
        <input type="file" id="imageToPost" accept="image/*" required /> <br />
        <label htmlFor="acceptUsePolicy">Acceptable Use Policy:</label>
        <input type="checkbox" id="acceptUsePolicy" required /> <br />
        <input type="submit" id="submitButton" />
      </form>
    </div>
  )
}

export default PostImage