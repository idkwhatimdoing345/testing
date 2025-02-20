let button = document.getElementById("clicker")
let score = 0
let textdisplay = document.getElementById("TDS")
let skval = document.getElementById("skipcount")
function update(){
    score += skval.value
    textdisplay.textContent = "points: " + score
}
button.addEventListener("click", update)