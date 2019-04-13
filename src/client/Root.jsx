/**
 * Root.jsx
 * Root component for react app
 */

// Node Modules
import React from 'react';
import {Provider} from 'react-redux';

// Components
import {App} from './components/App.container';

// Redux Store
import {configureStore} from './store';

export const Root = () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);
