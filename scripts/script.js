// JavaScript Document
// van Chantal Valk
var coll = document.getElementsByClassName("collapsible");

//https://css-tricks.com/working-with-javascript-media-queries/
var mediaQuery = window.matchMedia('(min-width: 30em)');

for (var i = 0; i < coll.length; i++) {
    if (mediaQuery.matches) {
        coll[i].classList.toggle("active");
        var content = coll[i].nextElementSibling;
        content.style.display = "flex";
    } else {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "flex") {
                content.style.display = "none";
            } else {
                content.style.display = "flex";
            }
        });
    }
}

/* menu klikbaar maken*/
var deButton = document.querySelector(".menuActief");

function doeFormHeenEnWeer(){
    let hetFormulier = document.querySelector("aside");
    hetFormulier.classList.toggle("toonForm");
}

deButton.addEventListener("click", doeFormHeenEnWeer);

