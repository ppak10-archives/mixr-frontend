/**
 * self.js
 * Reducers for actions related to the app user (self)
 */

// Constants
import {DEFAULT_LATITUDE, DEFAULT_LONGITUDE} from '../constants/map';

const initialState = {
  eventInterests: [],
  gettingInterests: false,
  gettingLocation: false,
  getLocationSuccess: false,
  location: {
    lat: DEFAULT_LATITUDE,
    lng: DEFAULT_LONGITUDE,
  },
  userId: null,
};

export const self = (state = initialState, {type, ...payload}) => {
  switch (type) {
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