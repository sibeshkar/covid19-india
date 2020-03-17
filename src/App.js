import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';

const history = require('history').createBrowserHistory;

function App() {
  return (
    <div className="App">

      <Router history={history}>
        <Route render={({location}) => (
          <div className="Router">
            <Navbar />
            <Route exact path="/" render={() => <Redirect to="/" />} />
            <Switch location={location}>
              <Route exact path="/" render={(props) => <Home {...props}/>} />
            </Switch>
          </div>
        )}
        />
      </Router>

    </div>
  );
}

export default App;
