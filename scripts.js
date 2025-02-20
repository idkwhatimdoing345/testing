let button = document.getElementById("clicker")
let score = 0
let thing = "useless"
let textdisplay = document.getElementById("TDS")
function update(){
    score += 1
    textdisplay.textContent = "points: " + score
}
button.addEventListener("click", update)