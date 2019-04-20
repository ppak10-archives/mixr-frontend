/**
 * authentication.js
 * Reducer for authentication actions
 */

const initialState = {
  fbPermissionsStatus: false,
  serviceType: null,
  sessionToken: '',
};

export const authentication = (state = initialState, {type, ...payload}) => {
  switch (type) {
    case 'LOAD_SESSION_OBJECT_SUCCESS':
      return {
        ...state,
        fbPermissionsStatus: true,
        serviceType: payload.serviceType,
        sessionToken: payload.sessionToken,
      };
    case 'LOAD_SESSION_OBJECT_FAILURE':
    case 'REMOVE_SESSION_OBJECT_SUCCESS':
      return {
        ...state,
        fbPermissionsStatus: false,
        serviceType: null,
        sessionToken: '',
      };
    case 'STORED_SESSION_OBJECT':
      return {
        ...state,
      };
    case 'REMOVED_FB_PERMISSIONS':
      return {
        ...state,
        fbPermissionsStatus: false,
      };
    case 'REMOVED_FB_PERMISSIONS_FAILED':
      return {
        ...state,
      };
    case 'FACEBOOK_AUTHENTICATION_SUCCESS':
      return {
        ...state,
        fbPermissionsStatus: true,
      };
    case 'FACEBOOK_AUTHENTICATION_FAILURE':
      return {
        ...state,
        fbPermissionsStatus: false,
      };
    default:
      return state;
  }
};
