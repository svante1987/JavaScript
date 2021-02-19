/*Felsöka JS:
Använder use strict så att jag inte lika lätt ska kunna göra slarvfel.
Nedanför här så har jag lite kod som skall få min header att rulla med när jag scrollar, den funkar inte.
När jag är inne i dev tools i chrome och kollar i konsollen så ser jag tre felmeddelanden.
Felsöka html/css:
När jag skriver min kod i css/html så har jag VS code och min browser uppe samtidigt,
genom tillägget live server i VS code kan jag se min hemsida i browsern och kan exprimentera i
css och html och direkt se resultatet på hemsidan. 
Ett väldigt dynamiskt sätt att jobba och rätt kul faktiskt. :D*/
"use strict";
document.addEventListener("DOMContentLoaded", onPageLoad);

/*REGION: header följer med när man scrollar */
window.onscroll = function(){headerScroll()};

let header = document.getElementById("minHeader");

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

function onPageLoad() {
    let inputBox = document.querySelector("#input-number");
  
    inputBox.oninput = function() {
      removeAllSections();
      makeSections(parseInt(inputBox.value));
    };
  }

function makeSections(count){
    for (let i = 0; i < count; i++){
        let parent = document.querySelector("main");

        let child = document.createElement("section");
        let title = document.createElement("h4");
        let blurb = document.createElement("p");

        title.innerText = "Titel " + i;
        blurb.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, 
        commodi praesentium eius quod suscipit! 
        Tenetur magnam eligendi amet fugiat adipisci impedit.`;

        makeEditable(title);
        makeEditable(blurb);

        child.append(title);
        child.append(blurb);
        parent.append(child);
    }
}

function removeAllSections(){
    let test_sections = document.querySelectorAll("section");
    for (let i = 0; i < test_sections.length; i++) {
      test_sections[i].remove();
    }
  }
  
  function makeEditable(elem){
    elem.onclick = function(e) {
      elem.contentEditable = true;
      elem.focus();
    };
    elem.onblur = function(e) {
      elem.contentEditable = false;
    };
  }
  