import home from "./home";
import menu from "./menu";
import contact from "./contact";
import clear from "./clear";

home();

let homeBtn = document.getElementById("home");
homeBtn.onclick = () => {
  clear();
  home();
};

let menuBtn = document.getElementById("menu");
menuBtn.onclick = () => {
  clear();
  menu();
};

let contactBtn = document.getElementById("contact");
contactBtn.onclick = () => {
  clear();
  contact();
};
