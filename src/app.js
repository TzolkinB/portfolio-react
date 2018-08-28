import React from 'react'
import {render} from 'react-dom'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'

import 'Style/app.css';

import AppBar from './components/shared/AppBar';
import Footer from './components/shared/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = () => (<div>
  <AppBar/>
  <Home id="home"/>
  <About id="about"/>
  <Skills id="skills"/>
  <Projects id="projects"/>
  <Footer/>
</div>)

render(<HashRouter basename="/">
  <App/>
</HashRouter>, document.getElementById('portfolio-app'));
