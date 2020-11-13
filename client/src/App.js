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
        <Route exact path="/" render={props=><Home {...props} />} />
        <Route exact path="/about" render={props=><About {...props} />} />
        <Route exact path="/contact" render={props=><Contact {...props} />} />
        <Route exact path="/gallery" render={props=><Gallery {...props} />} />
        <Route exact path="/reviews" render={props=><Reviews {...props} />} />
        <Route exact path="/services" render={props=><Services {...props} />} />
      </Switch>
    </Router>
  )
}

export default App;
