/**
 * index.js
 * Exports for root reducer
 */

// Node Modules
import {combineReducers} from 'redux';

// Reducers
import {authentication} from './authentication';

export const rootReducer = combineReducers({
  authentication,
});
