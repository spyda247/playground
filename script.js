console.log("Hello, World!");+

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
