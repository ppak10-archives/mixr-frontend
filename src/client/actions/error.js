/**
 * error.js
 * Dispatches actions according to error type message
 */

// // Actions
// import {createAlert} from './alerts';

// // Constants
// import * as ErrorConstants from '../constants/error';

export const createError = (error) => {
  switch (error.subtitle) {
    // case ErrorConstants.NETWORK_ERROR_MESSAGE:
    //   return createAlert(error);
    default:
      return {
        type: 'ERROR',
        error,
      };
  }
};
