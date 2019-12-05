import React, {useState} from 'react'
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'
import userStore from '../redux/userStore'

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(userStore.getState().loggedIn)

  userStore.subscribe(() => {
    setLoggedIn(userStore.getState().loggedIn)
  })

  const handleLogout = (() => {
    userStore.dispatch({
      type: 'LOGOUT_USER',
      data: {
        username: '',
        loggedIn: false
      }
    })
  })

  if (!loggedIn) {
    return (
      <header>
        <Link to='/'><h2>Picturebook</h2></Link>
        <SearchBar />
        <nav>
        <ul className="nav-links">
          <Link to='/login'><li>Login</li></Link>
          <Link to='/register'><li>Register</li></Link>
          <Link to='/login'><li><button>New Post</button></li></Link>
        </ul>
        </nav>
      </header>
    )
  } else {
    return (
      <header>
        <Link to='/'><h2>Picturebook</h2></Link>
        <SearchBar />
        <nav>
        <ul className="nav-links">
          <Link to='/' onClick={handleLogout}><li>Logout</li></Link>
          <Link to='/postimage'><li><button>New Post</button></li></Link>
        </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar