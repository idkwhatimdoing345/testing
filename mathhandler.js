alert("Update in progress, if you are viewing this page, it's in the middle of being rewritten");

// Getting elements
let menuopt1 = document.getElementById("add"); // Add div
let menuopt2 = document.getElementById("subt"); // Subtract div
let button1 = document.getElementById("addb"); // Add menu toggle button
let button2 = document.getElementById("subb"); // Subtract menu toggle button
let addvalue = document.getElementById("adding"); // Add input
let subvalue = document.getElementById("subtracting"); // Subtract input
let result = document.getElementById("res"); // Result h1
let inc = document.getElementById("val"); // Increment button

// Finished value, starts at 0
var finval = 0;

// Function to update the displayed result
function updateResult() {
  result.innerText = "Result: " + finval;
}

// Toggle add menu and close subtract menu
button1.addEventListener("click", function () {
  menuopt1.hidden = !menuopt1.hidden; // Toggle add menu
  menuopt2.hidden = true; // Hide subtract menu
});

// Toggle subtract menu and close add menu
button2.addEventListener("click", function () {
  menuopt2.hidden = !menuopt2.hidden; // Toggle subtract menu
  menuopt1.hidden = true; // Hide add menu
});

// Increment the value based on input, but only use the active mode
inc.addEventListener("click", function () {
  if (!menuopt1.hidden) {
    // If the add menu is visible, only add the input value
    let addNum = parseFloat(addvalue.value) || 0;
    finval += addNum;
  } else if (!menuopt2.hidden) {
    // If the subtract menu is visible, only subtract the input value
    let subNum = parseFloat(subvalue.value) || 0;
    finval -= subNum;
  }
  
  updateResult(); // Update the result display
});

// Initialize result display
updateResult();
