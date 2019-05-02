/**
 * index.js
 * Exports for root reducer
 */

// Node Modules
import {combineReducers} from 'redux';

// Reducers
import {authentication} from './authentication';
import {error} from './error';
import {events} from './events';
import {self} from './self';

export const rootReducer = combineReducers({
  authentication,
  error,
  events,
  self,
});
