/**
 * events.js
 * Reducers for events actions
 */

// Constants
import {
  STATUS_INITIAL,
  STATUS_START,
  STATUS_SUCCESS,
} from '../constants/reducers';

const initialState = {
  createEventStatus: STATUS_INITIAL,
  getHostEventsStatus: STATUS_INITIAL,
  hostEvents: [],
};

export const events = (state = initialState, {type, ...payload}) => {
  switch (type) {
    case 'CREATE_EVENT_INITIAL':
      return {
        ...state,
        createEventStatus: STATUS_INITIAL,
      };
    case 'CREATE_EVENT_START':
      return {
        ...state,
        createEventStatus: STATUS_START,
      };
    case 'CREATE_EVENT_SUCCESS':
      return {
        ...state,
        createEventStatus: STATUS_SUCCESS,
      };
    case 'GET_HOST_EVENTS_START':
      return {
        ...state,
        getHostEventsStatus: STATUS_START,
      };
    case 'GET_HOST_EVENTS_SUCCESS':
      return {
        ...state,
        getHostEventsStatus: STATUS_SUCCESS,
        hostEvents: payload.events.reverse(),
      };
    default:
      return state;
  }
};
