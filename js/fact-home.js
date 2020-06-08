"use strict";

import skills from './fact-data.js';
import factCounts from './fact-count.js';

console.log( factCounts);


const countSelector = '#skills .row';

factCounts.renderFactCount(countSelector, skills );
factCounts.animateFactCounts(countSelector);





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


