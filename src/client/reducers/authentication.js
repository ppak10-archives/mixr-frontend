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
        serviceType: payload.serviceType,
        sessionToken: payload.sessionToken,
      };
    case 'LOAD_SESSION_OBJECT_FAILURE':
    case 'REMOVE_SESSION_OBJECT_SUCCESS':
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
    default:
      return state;
  }
};
