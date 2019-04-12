/**
 * Root.jsx
 * Root component for react app
 */

// Node Modules
import React, {Component} from 'react';

// Components
import {App} from './components/App';

export default class Root extends Component {
  constructor() {
    super();
  }

  // componentDidMount() {
  //   FB.getLoginStatus((response) => console.log(response));
  // }

  render() {
    return <App />;
  }
}
