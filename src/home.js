import nav from './nav';

let home = () => {
    let content = document.getElementById('content');
    content.classList.add('home')

    let navbar = nav();
    content.appendChild(navbar);

    let home = document.getElementById('home');
    home.classList.add('active');

    let container = document.createElement('div');
    container.classList.add('container');
    let headline = document.createElement('h1');
    headline.innerHTML = 'kitchen';
    container.appendChild(headline);
    let tagline = document.createElement('p');
    tagline.innerHTML = 'where things happen';
    headline.appendChild(tagline);

    content.appendChild(container);
}

export default home;






    // const div = document.querySelector('div#content');
    // const message = document.createElement('div');
    // div.appendChild(message);
    // message.textContent = "Welcome";

    // const img = document.createElement('img');
    // img.src = '/img/cafe.jpg';
    // div.appendChild(img);