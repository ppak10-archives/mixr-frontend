/**
 * store.js
 * Configures redux store through enhancers and reducers
 */

// Node Modules
import {applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

// Reducer
import {rootReducer} from './reducers';

// Compose Enhancers
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers =
  typeof window === 'object' && devTools
    ? devTools({
      // options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;

// Enhancer
const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware),
    // other store enhancers go here
);

export const configureStore = (preloadedState) =>
  createStore(rootReducer, preloadedState, enhancer);
