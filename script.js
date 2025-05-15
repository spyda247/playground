console.log("Hello, World!");

const button = document.getElementById('myButton');
const box = document.getElementById('myBox');

button.addEventListener('click', () => {
  // Toggle between two background colors
  if (box.style.backgroundColor === 'lightblue') {
    box.style.backgroundColor = 'lightgreen';
  } else {
    box.style.backgroundColor = 'lightblue';
  }
});
