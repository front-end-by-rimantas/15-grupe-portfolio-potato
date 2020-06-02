"use strict";

function renderFactCount( selector, data ) {
    // validacija
    const DOM = document.querySelector(selector);
    
    if ( !DOM ) {
        throw 'error: could not find element to render new content'
    }
    

    // logika
    
    let HTML = '';
    for ( let i=0; i<data.length; i++) {
        const skill = data[i];
        HTML += `
          <div class="col-4 col-md-12 count" data-animated="false"
          data-value="${skill.value}">
            <div class="experience">
             <div class="round">
                <span class="count-num">0</span>
             </div>
             <div class="exp">${skill.title}</div>
           </div>
         </div>`;     
    }
    
    
    

    // rezultato grazinimas
    DOM.innerHTML = HTML;

    return;   
}

function animateFactCounts(countSelector) {
  const factCounts = document.querySelectorAll( countSelector + '> .count');

 window.addEventListener('scroll', () => {
    const windowBottomHeight = window.scrollY + window.innerHeight;
    
    for ( let i=0; i<factCounts.length; i++) {
    const c = factCounts[i];
    const cBottomHeight = c.offsetTop + c.offsetHeight;
    const Domvalue = c.querySelector('.count-num');

      if (cBottomHeight < windowBottomHeight && 
        c.dataset.animated === 'false') {
       c.dataset.animated = 'true';
       animateFactCountTextValue( Domvalue, c.dataset.value );

       
       
       } 

    }
 });
}

function animateFactCountTextValue(element, value) {
   
  const time = 4000;                //milliseconds
  const fps = 30;                   // 30 frames per second
  const refreshTime = 1000 / fps;
  const totalSteps = time / refreshTime;
  let step = 0;

  const timer = setInterval(() => {
    step++;
    element.innerText = Math.round( step / totalSteps * value );
    
    if( step>= totalSteps ) {
      console.log('stop', step);
      
      clearInterval( timer )
    }
    
  }, refreshTime);
}

export default {
  renderFactCount, animateFactCounts} ;