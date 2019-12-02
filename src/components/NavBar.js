import React from 'react'
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to='/'><h2>Picturebook</h2></Link>
      <SearchBar />
      <nav>
       <ul className="nav-links">
         <Link to='/login'><li>Login</li></Link>
         <Link to='/register'><li>Register</li></Link>
         <Link to='/postimage'><li><button>New Post</button></li></Link>
       </ul>
      </nav>
    </header>
  )
}

export default NavBar