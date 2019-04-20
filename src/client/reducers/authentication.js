/**
 * authentication.js
 * Reducer for authentication actions
 */

const initialState = {
  fbAccessToken: '',
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
    default:
      return state;
  }
};
