/* använder use strict så att jag inte lika lätt ska kunna göra slarvfel */
"use strict";

/*REGION: header följer med när man scrollar */
window.onscroll = function(){headerScroll()};

let header = document.getElementById("header");

let sticky = header.offsetTop;

function headerScroll(){
    if (window.pageYOffset > sticky)
    {
        header.classList.add("sticky");
    }
    else
    {
        header.classList.remove("sticky");
    }
}
/*END REGION*/

