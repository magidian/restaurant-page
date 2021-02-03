let menu = () => {
    let content = document.getElementById('content');
    content.classList.add('menu');
  
    let menuBtn = document.getElementById('menu');
    menuBtn.classList.add('active');

    let container = document.createElement('div');
    container.classList.add('container');


  let menu = document.createElement("ul");
  let items = ["pasta   15", "pizza   20", "burger   10"];

  for (let i = 0; i < items.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = items[i];
    menu.appendChild(item);
  }

  container.appendChild(menu);

  // const pasta = document.createElement('div');
  // pasta.classList.add('food');

  // const pizza = document.createElement('div');
  // pizza.classList.add('food');

  // const burger = document.createElement('div');
  // burger.classList.add('food');
}

export default menu;