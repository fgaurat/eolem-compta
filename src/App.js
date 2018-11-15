import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
              
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
      <Router>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
      </div>
      </>
    );
  }
}

export default App;
