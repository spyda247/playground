// 1. Add the click event listener to the button that will change the background color of the box to red

// Add your JavaScript code here

// Wait for the DOM to load

const button = document.querySelector("button")
const box = document.querySelector(".box")

if (button && box) {
  button.addEventListener("click", function () {
    //Changing the buttons text FROM "Click Me" to "Toggle"
    button.textContent = "Toggle"

    // Toggle Box background color
    box.style.backgroundColor = box.style.backgroundColor === "red" ? "" : "red"
  })
}
