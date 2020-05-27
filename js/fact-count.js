"use strict";

function renderFactCount( selector, data ) {
    // validacija
    const DOM = document.querySelector(selector);
    
    if( !DOM ) {
        throw 'error: could'
    }
    

    // logika
    console.log(selector);
    console.log(data);

    let HTML = '';
    for ( let i=0; i<data.length; i++) {
        HTML += `
          <div class="col-4 col-lg-4 col-sm-12">
            <div class="experience">
             <div class="round">
                <span class="value">8</span>
             </div>
             experience
           </div>
         </div>`;     
    }
    
    
    

    // rezultato grazinimas

    return;
    
    
}

export default renderFactCount;