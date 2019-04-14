/**
 * authentication.js
 * Reducer for authentication actions
 */

const initialState = {
  authenticating: false,
  fbPermissionsStatus: false,
  serviceType: null,
  sessionToken: '',
};

export const authentication = (state = initialState, {type, ...payload}) => {
  switch (type) {
    case 'LOADED_SESSION_OBJECT':
      return {
        ...state,
        serviceType: payload.serviceType,
        sessionToken: payload.sessionToken,
      };
    case 'NO_SESSION_OBJECT':
    case 'REMOVED_SESSION_OBJECT':
      return {
        ...state,
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
    case 'VALID_FB_TOKEN':
      return {
        ...state,
        fbPermissionsStatus: true,
      };
    case 'INVALID_FB_TOKEN':
      return {
        ...state,
        fbPermissionsStatus: false,
      };
    case 'STARTED_AUTHENTICATION':
      return {
        ...state,
        authenticating: true,
      };
    case 'FINISHED_AUTHENTICATION':
    case 'FAILED_AUTHENTICATION':
      return {
        ...state,
        authenticating: false,
      };
    default:
      return state;
  }
};
