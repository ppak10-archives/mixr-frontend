/**
 * route.js
 * API route constants
 */

// Events Domain
const BACKEND_DEBUG_HOST = '67.171.69.199:3000';
const VERSION = '1.0';
export const REQUEST_DOMAIN = `http://${BACKEND_DEBUG_HOST}/api/${VERSION}`;

// Chat Domain
const CHAT_DEBUG_HOST = '67.171.69.199:3001';
export const CHAT_DOMAIN = `http://${CHAT_DEBUG_HOST}/api/${VERSION}`;

// Facebook Domain
export const FB_GRAPH_API = `https://graph.facebook.com`;
