import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import ProductList from './components/productList';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
