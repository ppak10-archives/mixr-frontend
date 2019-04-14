/**
 * index.js
 * Exports for root reducer
 */

// Node Modules
import {combineReducers} from 'redux';

// Reducers
import {authentication} from './authentication';
import {error} from './error';

export const rootReducer = combineReducers({
  authentication,
  error,
});
