import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import PostImage from './components/PostImage'
import Home from './components/Home'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/postimage' component={PostImage} />
      </Switch>
    </Router>
    
  )
}

export default App;
