// JavaScript Document
// van Chantal Valk
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

/* menu klikbaar maken*/
var deButton = document.querySelector(".menuActief");

function doeFormHeenEnWeer(){
    let hetFormulier = document.querySelector("form");
    hetFormulier.classList.toggle("toonForm");
}

deButton.addEventListener("click", doeFormHeenEnWeer);
