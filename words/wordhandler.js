let wordinput = document.getElementById("data");
let start = document.getElementById("start");
let timer = document.getElementById("timer");
let resultDisplay = document.getElementById("result");

let seconds = 60;
let running = false;
let interval;

// Function to count words
function countWords(text) {
    let words = text.trim().split(/\s+/);
    return words.filter(word => word.length > 0).length;
}

function run() {
    if (!running) {
        running = true;
        start.textContent = "Stop";
        seconds = 60;
        wordinput.value = ""; // Clear input
        wordinput.disabled = false; // Enable typing
        wordinput.focus(); // Auto-focus on text area
        resultDisplay.textContent = "";
        timer.textContent = "Timer: " + seconds;

        interval = setInterval(() => {
            seconds -= 1;
            timer.textContent = "Timer: " + seconds;

            if (seconds === 0) {
                clearInterval(interval);
                wordinput.disabled = true; // Stop typing
                start.textContent = "Start";
                running = false;
                
                let wordCount = countWords(wordinput.value);
                resultDisplay.textContent = `You typed ${wordCount} words!`;
            }
        }, 1000);
    } else {
        running = false;
        clearInterval(interval); // Stop the timer
        start.textContent = "Start";
        wordinput.disabled = true;
    }
}

start.addEventListener("click", run);
