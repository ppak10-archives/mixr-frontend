/**
 * events.js
 * Reducers for events actions
 */

// Constants
import {STATUS_OBJECT} from '../constants/reducers';

const initialState = {
  createEventStatus: STATUS_OBJECT,
  getHostEventsStatus: STATUS_OBJECT,
  hostEvents: [],
};

export const events = (state = initialState, {type, ...payload}) => {
  switch (type) {
    case 'CREATE_EVENT_START':
      return {
        ...state,
        createEventStatus: {
          ...state.createEventStatus,
          start: true,
          success: false,
        },
      };
    case 'GET_HOST_EVENTS_START':
      return {
        ...state,
        getHostEventsStatus: {
          ...state.getHostEventsStatus,
          start: true,
          success: false,
        },
      };
    case 'GET_HOST_EVENTS_SUCCESS':
      return {
        ...state,
        getHostEventsStatus: {
          ...state.getHostEventsStatus,
          start: false,
          success: true,
        },
        hostEvents: payload.events,
      };
    default:
      return state;
  }
};
