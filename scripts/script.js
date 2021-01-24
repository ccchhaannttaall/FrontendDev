// JavaScript Document
// van Chantal Valk
var coll = document.getElementsByClassName("collapsible");

//https://css-tricks.com/working-with-javascript-media-queries/
// Deze mediaQuery is nodig omdat op mobiel de lijst standaard gesloten is en moet kunnen worden open en dicht geklapt.
// Op het grote scherm moet deze altijd open zijn weergegeven. Dit kan dus niet enkel met css worden opgelost. Ik heb dit wel geprobeerd.
// Deze javascript interactie had in overleg met J. Kapritsias niet uitgewerkt hoeven worden dit valt niet binnen de scope van de opdracht.
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

var menuCloseButton = document.querySelector("aside button");
menuCloseButton.addEventListener("click", function () {
    doeFormHeenEnWeer();
});

function doeFormHeenEnWeer(){
    let hetFormulier = document.querySelector("aside");
    hetFormulier.classList.toggle("toonForm");
}

deButton.addEventListener("click", doeFormHeenEnWeer);

