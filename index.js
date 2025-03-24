// Remove the <main> element with id 'main'
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// Create a new <h1> element with id 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Owen is the champion'; // Replace 'Owen' with your actual name

// Append the new <h1> element to the body
document.body.appendChild(newHeader);