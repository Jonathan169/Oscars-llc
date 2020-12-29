import React from 'react'
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import Home from './pages/index';
import Reviews from './pages/reviews';
import Services from './pages/services';

function App(){
  return (
    <Router>
      <Switch>
        <Route exact path="/"        component={Home} />
        <Route exact path="/about"   component={About }/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/gallery" component={Gallery }/>
        <Route exact path="/reviews" component={Reviews }/>
        <Route exact path="/services"component={Services}/>
      </Switch>
    </Router>
  )
}

export default App;
