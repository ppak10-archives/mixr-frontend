/**
 * events.js
 * Actions for events
 */

// Actions
import {createError} from './error';

// API
import {createEventRoute} from '../api/events';

export const createEvent = (sessionToken, eventObject) => async (dispatch) => {
  try {
    dispatch({
      type: 'CREATE_EVENT_START',
    });
    const response = await createEventRoute(sessionToken, eventObject);
    return response;
  } catch (err) {
    dispatch(createError(err));
  }
};
