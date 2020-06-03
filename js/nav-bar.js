"use strict"
//open hmaburger to chooselist//
var hamburgerBar = document.querySelector("header .hamburgerBar");
var button = document.querySelector("header .menu");

function menu(){
    if (hamburgerBar.style.display === "grid") {
        hamburgerBar.style.display ="none";    
    } else {
        hamburgerBar.style.display ="grid";
    }
}
addEventListener("resize", function(){
    if(this.window.innerWidth>1080){
        hamburgerBar.style.display ="none";
    }
})


