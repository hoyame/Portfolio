import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './navigation.scss'


class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> About </Link></li>
          <li><Link to={'/competences'} className="nav-link">Competences</Link></li>
          <li><Link to={'/about'} className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    );
  }
}


export default Navigation;