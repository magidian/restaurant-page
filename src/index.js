const message = document.createElement('div');
const div = document.querySelector('div#content');
div.appendChild(message);
message.textContent = "Welcome";

const img = document.createElement('img');
img.src = '/img/cafe.jpg';
div.appendChild(img);

