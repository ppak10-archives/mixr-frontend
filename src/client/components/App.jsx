/**
 * App.jsx
 * React app file
 */

// Node Modules
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import {Navigation} from './Navigation';

// Pages
import {AboutPage} from '../pages/About';
import {EventsPage} from '../pages/Events';
import {HomePage} from '../pages/Home';

export const App = () => (
  <Router>
    <Navigation />
    <div className="d-flex justify-content-center">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/events" component={EventsPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  </Router>
);
