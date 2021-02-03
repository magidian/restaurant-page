let nav = () => {
    let nav = document.createElement('nav');
    let home = document.createElement('button');
    home.innerHTML = 'HOME';
    home.id = 'home';
    let menu = document.createElement('button');
    menu.innerHTML = 'MENU';
    menu.id = 'menu';
    let contact = document.createElement('button');
    contact.innerHTML = 'CONTACT';
    contact.id = 'contact';
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

}

export default nav;