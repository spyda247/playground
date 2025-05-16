// 1. Add the click event listerner to the button that will change the background color of the box to red

// Add your JavaScript code here

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  const box = document.querySelector(".box");

  if (button && box) {
    button.addEventListener("click", function () {
      // Toggle background color
      const currentColor = box.style.backgroundColor;
      box.style.backgroundColor = currentColor === "blue" ? "green" : "blue";
    });
  }
});

