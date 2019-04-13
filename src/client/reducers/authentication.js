/**
 * authentication.js
 * Reducer for authentication actions
 */

const initialState = {
  fbLoginStatus: false,
};

export const authentication = (state = initialState, {type, ...payload}) => {
  switch (type) {
    case 'FB_LOGIN_STATUS_SUCCESS':
      return {
        ...state,
        fbLoginStatus: true,
      };
    case 'FB_LOGIN_STATUS_FAILURE':
      return {
        ...state,
        fbLoginStatus: false,
      };
    default:
      return state;
  }
};
