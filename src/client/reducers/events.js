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
  eventDetails: {},
  getEventByIdStatus: STATUS_INITIAL,
  getHostEventsStatus: STATUS_INITIAL,
  hostEvents: [],
  showUpcomingEvents: true,
  updateEventByIdStatus: STATUS_INITIAL,
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
    case 'GET_EVENT_BY_ID_START':
      return {
        ...state,
        getEventByIdStatus: STATUS_START,
      };
    case 'GET_EVENT_BY_ID_SUCCESS':
      return {
        ...state,
        getEventByIdStatus: STATUS_SUCCESS,
        eventDetails: payload.eventDetails,
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
    case 'TOGGLE_SHOW_ONGOING_EVENTS':
      return {
        ...state,
        ...SHOW_EVENTS_NONE,
        showOngoingEvents: !state.showOngoingEvents,
      };
    case 'TOGGLE_SHOW_PAST_EVENTS':
      return {
        ...state,
        ...SHOW_EVENTS_NONE,
        showPastEvents: !state.showPastEvents,
      };
    case 'TOGGLE_SHOW_UPCOMING_EVENTS':
      return {
        ...state,
        ...SHOW_EVENTS_NONE,
        showUpcomingEvents: !state.showUpcomingEvents,
      };
    case 'UPDATE_EVENT_BY_ID_START':
      return {
        ...state,
        updateEventByIdStatus: STATUS_START,
      };
    case 'UPDATE_EVENT_BY_ID_SUCCESS':
      return {
        ...state,
        updateEventByIdStatus: STATUS_SUCCESS,
      };
    default:
      return state;
  }
};
