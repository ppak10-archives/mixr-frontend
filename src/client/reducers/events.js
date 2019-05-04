/**
 * events.js
 * Reducers for events actions
 */

// Constants
import {
  SHOW_EVENTS_NONE,
  STATUS_INITIAL,
  STATUS_START,
  STATUS_SUCCESS,
} from '../constants/reducers';

const initialState = {
  ...SHOW_EVENTS_NONE,
  createEventStatus: STATUS_INITIAL,
  getHostEventsStatus: STATUS_INITIAL,
  hostEvents: [],
  showUpcomingEvents: true,
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
    case 'TOGGLE_SHOW_PAST_EVENTS':
      return {
        ...state,
        ...SHOW_EVENTS_NONE,
        showPastEvents: !state.showPastEvents,
      };
    case 'TOGGLE_SHOW_STARTED_EVENTS':
      return {
        ...state,
        ...SHOW_EVENTS_NONE,
        showStartedEvents: !state.showStartedEvents,
      };
    case 'TOGGLE_SHOW_UPCOMING_EVENTS':
      return {
        ...state,
        ...SHOW_EVENTS_NONE,
        showUpcomingEvents: !state.showUpcomingEvents,
      };
    default:
      return state;
  }
};
