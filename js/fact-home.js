"use strict";

import skills from './fact-data.js';
import renderFactCount from './fact-count.js';


console.log('home page...');
// console.log(skills);

renderFactCount('#skills .row', skills );

