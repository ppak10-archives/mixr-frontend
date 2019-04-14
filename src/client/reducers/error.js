/**
 * error.js
 * Reducers for error messages
 */

const initialState = {
  list: [],
};

export const error = (state = initialState, {type, ...payload}) => {
  switch (type) {
    case 'ERROR':
      return {
        ...state,
        list: [...state.list, payload.error],
      };
    default:
      return state;
  }
};
