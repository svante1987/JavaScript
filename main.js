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
/* överallt där det står document går jag in i DOM som här ovanför.
när DOMcontetloaded har skett så har DOM trädet byggts, browsern har laddat
all html kod, externa resurser typ img och stylesheets kan dock vara ofärdiga */

/*REGION: header följer med när man scrollar */
window.onscroll = function(){headerScroll()};
/* med hjälp av window så går jag in i BOM, där kan jag komma åt det som händer i fönstret
t.ex vad som skall hända om man scrollar */
let header = document.getElementById("minHeader"); //här går jag in i DOM och letar upp min header med hjälp av dess id.

let sticky = header.offsetTop;

function headerScroll(){
    if (window.pageYOffset > sticky) // här går jag in i BOM och vill att headern skall fastna och röra sig med fönstret
    // när det rör sig i y-led (upp, ner).

    {
        header.classList.add("sticky"); // här vill jag att css stilen sticky skall läggas till headerns klass när man scrollar.
    }
    else
    {
        header.classList.remove("sticky"); // här vill jag att sticky skall försvinna om man inte scrollar.
    }
}
/*END REGION*/
/* nedanför använder jag DOM för att komma åt input fältet för nummer,
 när en input sker så skall tidigare blogginlägg skapas och nya hämtas */
function onPageLoad() {
    let inputBox = document.querySelector("#input-number");
  
    inputBox.oninput = function() {
      removeAllSections();
      makeSections(parseInt(inputBox.value)); //denna koden stoppar in siffran i number input i makeSections
    };
  }

// denna koden skapar nya blogginlägg.
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
// denna kod tar bort alla blogginlägg
function removeAllSections(){
    let test_sections = document.querySelectorAll("section");
    for (let i = 0; i < test_sections.length; i++) {
      test_sections[i].remove();
    }
  }
  /* denna koden gör så att man kan skriva i blogginläggen som genereras
    här händer det alltså ett event, du klickar (onclick) i rutan, titel eller textfältet
    också kan du skriva vad du vill :)
    (onblur) gör att när du lämnar rutan så kan du inte skriva mer i den.
    */
  function makeEditable(elem){
    elem.onclick = function(e) {
      elem.contentEditable = true;
      elem.focus();
    };
    elem.onblur = function(e) {
      elem.contentEditable = false;
    };
  }
  