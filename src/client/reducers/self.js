/**
 * self.js
 * Reducers for actions related to the app user (self)
 */

// Constants
import {DEFAULT_LATITUDE, DEFAULT_LONGITUDE} from '../constants/map';

const initialState = {
  alerts: [],
  eventInterests: [],
  gettingInterests: false,
  gettingLocation: false,
  getLocationSuccess: false,
  location: {
    lat: DEFAULT_LATITUDE,
    lng: DEFAULT_LONGITUDE,
  },
  userId: 0,
};

export const self = (state = initialState, {type, ...payload}) => {
  switch (type) {
    case 'CREATE_ALERT':
      return {
        ...state,
        alerts: [...state.alerts, payload.alertObject],
      };
    case 'REMOVE_ALERT':
      return {
        ...state,
        alerts: state.alerts.filter((_alert, index) => index !== 0),
      };
    case 'GETTING_LOCATION':
      return {
        ...state,
        gettingLocation: true,
        getLocationSuccess: false,
      };
    case 'GET_LOCATION_SUCCESS':
      return {
        ...state,
        gettingLocation: false,
        getLocationSuccess: true,
        location: payload.location,
      };
    case 'GET_LOCATION_FAILURE':
      return {
        ...state,
        gettingLocation: false,
        getLocationSuccess: false,
      };
    case 'GETTING_SELF_INTERESTS':
      return {
        ...state,
        gettingInterests: true,
      };
    case 'GET_SELF_INTERESTS_SUCCESS':
      return {
        ...state,
        gettingInterests: false,
        eventInterests: payload.data,
      };
    case 'GET_SELF_INTERESTS_FAILURE':
      return {
        ...state,
        gettingInterests: false,
      };
    case 'LOAD_SESSION_OBJECT_SUCCESS':
      return {
        ...state,
        userId: payload.userId,
      };
    case 'LOAD_SESSION_OBJECT_FAILURE':
    case 'REMOVE_SESSION_OBJECT_SUCCESS':
      return {
        ...state,
        userId: null,
      };
    default:
      return state;
  }
};
