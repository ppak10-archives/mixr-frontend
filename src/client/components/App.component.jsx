/**
 * App.component.jsx
 * React app file
 */

// Node Modules
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import {Navigation} from './Navigation';

// Pages
import {AboutPage} from '../pages/About';
import {EventsPage} from '../pages/Events.container';
import {HomePage} from '../pages/Home.container';

// Constants
import {ACTION, STRING} from '../constants/proptypes';

export class App extends Component {
  constructor() {
    super();
  }

  /**
   * Checks if user has already logged in before by initializing facebook api
   */
  componentDidMount() {
    this.props.initializeFBAPI();
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

App.propTypes = {
  initializeFBAPI: ACTION,
  loadSessionObject: ACTION,
  sessionToken: STRING,
};
