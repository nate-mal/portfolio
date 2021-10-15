import style from "/src/scss/main.scss";
import * as bootstrap from "bootstrap";
import { gsap } from "gsap";

import component from "./component.js";
import images from "./images.js";
import glitch from "./glitch";

document.getElementById("avatar").addEventListener("click", () => {
  if (document.querySelector("body").classList.contains("theme-dark")) {
    document.querySelector("body").classList.remove("theme-dark");
    document.querySelector("body").classList.add("theme-light");
  } else {
    document.querySelector("body").classList.remove("theme-light");
    document.querySelector("body").classList.add("theme-dark");
  }
});
