/**
 * index.js
 * Entry file for webpack
 */

// Node Modules
import React from 'react';
import {render} from 'react-dom';

// Style
import './style';

// App
import {Root} from './Root';

// Document Element
render(<Root />, document.getElementById('root'));
