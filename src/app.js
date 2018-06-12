import React          from 'react'
import { HashRouter } from 'react-router-dom'
import { render }     from 'react-dom'

import 'Style/app.css';

import MIBrandBar       from  './components/shared/MIBrandBar';
import AppBar           from  './components/shared/AppBar';
import Breadcrumbs      from  './components/shared/Breadcrumbs';
import Footer           from  './components/shared/Footer';

const App = () => (
  <div>
    <MIBrandBar />
    <AppBar />
    <Breadcrumbs />
    <Footer />
  </div>
)

render(
  <HashRouter basename="/">
    <App />
  </HashRouter>

  , document.getElementById('uix-react-template'));
