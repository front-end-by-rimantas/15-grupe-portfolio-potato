"use strict";

import skills from './fact-data.js';
import renderFactCount from './fact-count.js';


const countSelector = '#skills .row';

renderFactCount(countSelector, skills );

const factCounts = document.querySelectorAll( countSelector + '> .count');



window.addEventListener('scroll', () => {
    const windowBottomHeight = window.scrollY + window.innerHeight;
    
    for ( let i=0; i<factCounts.length; i++) {
    const c = factCounts[i];
    const cBottomHeight = c.offsetTop + c.offsetHeight;

   if (cBottomHeight < windowBottomHeight) {
       c.dataset.animated = 'true';
       
   } 

   }
});
