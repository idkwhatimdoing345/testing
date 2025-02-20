
// 1. Create an audio context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let activate = document.getElementById("clicker");

function click() {
    // 2. Create a new oscillator node each time the button is clicked
    const oscillator = audioContext.createOscillator();

    // 3. Set the oscillator type ('sine', 'square', 'sawtooth', 'triangle')
    oscillator.type = 'sine'; 

    // 4. Set frequency (in Hz)
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // A4 note

    // 5. Connect the oscillator to the speakers
    oscillator.connect(audioContext.destination);

    // 6. Start the oscillator
    oscillator.start();

    // 7. Stop it after 0.5 seconds
    setTimeout(() => {
        oscillator.stop();
    }, 500);
}

// Attach the function to the button click event
activate.addEventListener("click", click);

