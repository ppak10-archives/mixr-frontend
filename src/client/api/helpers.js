/**
 * api.js
 * Helper functions to format request and responses for APIs
 */

export const getRequest = async (sessionToken, route) => {
  const payload = {
    method: 'GET',
    headers: {
      session_token: sessionToken,
    },
  };
  const response = await fetch(route, payload);
  return await responseStatus(response);
};

const responseStatus = async (response) => {
  switch (response.status) {
    case 200:
      return {
        status: 200,
        data: await response.json(),
      };
    default:
      return {
        status: response.status,
        data: null,
      };
  }
};
