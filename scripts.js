let button = document.getElementById("clicker")
let score = 0
let textdisplay = document.getElementById("TDS")
let skval = document.getElementById("skipcount")
let clearb = document.getElementById("clear")
function update(){
    score += parseInt(skval.value)
    textdisplay.textContent = "points: " + score
}
button.addEventListener("click", update)
function clear(){
    score = 0
    update
}
clearb.addEventListener("click", clear)