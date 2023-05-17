import React          from 'react'
import { render }     from 'react-dom'
import { 
  HashRouter, Route, Switch,
  Redirect
} from 'react-router-dom'

import 'Style/app.css';

import AppBar from  './components/shared/AppBar';
import Footer from  './components/shared/Footer';
import Home   from  './components/Home';

const App = () => (
  <div>
    <AppBar />
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
    <Footer />
  </div>
)

render(
  <HashRouter basename="/">
    <App />
  </HashRouter>

  , document.getElementById('portfolio-app'));
