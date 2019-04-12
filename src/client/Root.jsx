/**
 * Root.jsx
 * Root component for react app
 */

// Node Modules
import React, {Component} from 'react';
import {Provider} from 'react-redux';

// Components
import {App} from './components/App';

// Redux Store
import {configureStore} from './store';

export default class Root extends Component {
  constructor() {
    super();
  }

  // componentDidMount() {
  //   FB.getLoginStatus((response) => console.log(response));
  // }

  render() {
    return (
      <Provider store={configureStore()}>
        <App />
      </Provider>
    );
  }
}
