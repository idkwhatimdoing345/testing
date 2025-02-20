// 1. Create an audio context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// 2. Create an oscillator node
const oscillator = audioContext.createOscillator();

// 3. Set the oscillator type ('sine', 'square', 'sawtooth', 'triangle')
oscillator.type = 'sine'; 

// 4. Set frequency (in Hz)
oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // A4 note

// 5. Connect the oscillator to the speakers
oscillator.connect(audioContext.destination);
let acivate = document.getElementById("clicker")


function click(){
    oscillator.start();

    // 7. Stop it after 2 seconds
    setTimeout(() => {
        oscillator.stop();
    }, 500);
}
acivate.addEventListener("click", click)
