/**
 * index.js
 * Entry file for webpack
 */

// Node Modules
import React from 'react';
import {render} from 'react-dom';

// Style
// eslint-disable-next-line no-unused-vars
import * as Style from './style';

// App
import {App} from './components/App';

// Document Element
render(<App />, document.getElementById('root'));
