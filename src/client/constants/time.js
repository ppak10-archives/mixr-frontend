/**
 * time.js
 * Constants used for time
 */

// Node Modules
import moment from 'moment';

// Moment
export const NOW = moment();
export const WEEKDAY_MONTH_DATE_FORMAT = 'dddd, MMMM Do'; // Friday, April 26th
export const YESTERDAY = moment().subtract(1, 'day');