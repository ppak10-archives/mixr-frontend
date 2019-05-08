/**
 * events.js
 * Actions for events
 */

// Actions
import {createError} from './error';

// API
import {
  createEventRoute,
  getEventByIdRoute,
  getHostEventsRoute,
  updateEventByIdRoute,
} from '../api/events';

// Constants
import {MILLISECONDS_PER_SECOND} from '../constants/time';

export const createEvent = (sessionToken, eventObject) => async (dispatch) => {
  try {
    dispatch({
      type: 'CREATE_EVENT_START',
    });
    const response = await createEventRoute(sessionToken, eventObject);
    if (response.status == 200) {
      dispatch({
        type: 'CREATE_EVENT_SUCCESS',
      });
    }
  } catch (err) {
    dispatch(createError(err));
  }
};

export const getEventById = (sessionToken, eventId) => async (dispatch) => {
  try {
    dispatch({
      type: 'GET_EVENT_BY_ID_START',
    });
    const response = await getEventByIdRoute(sessionToken, eventId);
    if (response.status === 200) {
      response.data.time_end *= MILLISECONDS_PER_SECOND;
      response.data.time_start *= MILLISECONDS_PER_SECOND;
      dispatch({
        type: 'GET_EVENT_BY_ID_SUCCESS',
        eventDetails: response.data,
      });
    }
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

export const updateEventById = (sessionToken, eventId, eventObject) => async (
  dispatch,
) => {
  try {
    dispatch({
      type: 'UPDATE_EVENT_BY_ID_START',
    });
    const response = await updateEventByIdRoute(
        sessionToken,
        eventId,
        eventObject,
    );
    if (response.status == 200) {
      dispatch({
        type: 'UPDATE_EVENT_BY_ID_SUCCESS',
      });
      dispatch(getEventById(sessionToken, eventId));
    }
  } catch (err) {
    dispatch(createError(err));
  }
};
