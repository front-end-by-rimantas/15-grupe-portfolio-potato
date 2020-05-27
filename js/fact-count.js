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
          <div class="col-4 col-md-12 count" data-animated="false">
            <div class="experience">
             <div class="round">
                <span class="value">${skill.value}</span>
             </div>
             <div class="exp">${skill.title}</div>
           </div>
         </div>`;     
    }
    
    
    

    // rezultato grazinimas
    DOM.innerHTML = HTML;

    return;
    
    
}

export default renderFactCount;