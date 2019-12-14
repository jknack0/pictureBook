import React from 'react';
import './App.css';
import NavBar from '../NavBar'
import {Router, Switch, Route} from 'react-router-dom'
import Login from '../Login'
import Register from '../Register'
import PostImage from '../PostImage'
import Gallery from '../Gallery'
import ImageView from '../ImageView'
import history from '../../history/index'

const App = () => {
  return (
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Gallery} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/postimage' component={PostImage} />
        <Route path='/postview/:id' component={ImageView} />
      </Switch>
    </Router>  
  )
}

export default App;
