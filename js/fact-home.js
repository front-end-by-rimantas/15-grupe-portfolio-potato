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
    const value = c.querySelector('.value')
    const cBottomHeight = c.offsetTop + c.offsetHeight;

   if (cBottomHeight < windowBottomHeight) {
       c.dataset.animated = 'true';
       
   } 

   }
});
// function animateProgressBarTextValue( element, value ) {
//     document.getElementById(id).innerHTML = 0;
//     const number = parseInt(value);         // final number to reach ( 0...[number] )
//     const time = 2000;                      // miliseconds
//     const fps = 30;                         // 30 frames per second
    
//     const refreshTime = 1000 / fps;
//     const totalSteps = time / refreshTime;
//     let step = 0;

//     const timer = setInterval(() => {
//         step++;
//         element.innerText = Math.round( step / totalSteps * number ) + '%';
//         document.getElementById(id).innerHTML = element.innerText ;
//         if ( step >= totalSteps ) {
//             clearInterval( timer );
//         }
//     }, refreshTime);
// }
// animateProgressBarTextValue( "values", 2457 );
