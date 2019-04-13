/**
 * App.jsx
 * React app file
 */

// Node Modules
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import {Navigation} from './Navigation.container';

// Pages
import {AboutPage} from '../pages/About';
import {EventsPage} from '../pages/Events';
import {HomePage} from '../pages/Home';

export class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Navigation />
        <div className="page">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/events" component={EventsPage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
