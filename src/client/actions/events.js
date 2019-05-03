/**
 * events.js
 * Actions for events
 */

// Actions
import {createError} from './error';

// API
import {createEventRoute, getHostEventsRoute} from '../api/events';

// Constants
import {MILLISECONDS_PER_SECOND} from '../constants/time';

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

export const getHostEvents = (sessionToken) => async (dispatch) => {
  try {
    dispatch({
      type: 'GET_HOST_EVENTS_START',
    });
    const response = await getHostEventsRoute(sessionToken);
    if (response.status === 200) {
      response.data.events.map((event) => {
        event.time_end *= MILLISECONDS_PER_SECOND;
        event.time_start *= MILLISECONDS_PER_SECOND;
        return event;
      });
      dispatch({
        type: 'GET_HOST_EVENTS_SUCCESS',
        events: response.data.events,
      });
    }
  } catch (err) {
    dispatch(createError(err));
  }
};
