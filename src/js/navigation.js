///dark mode switcher
const darkMode = document.getElementById("switch-theme");

if (darkMode.checked) {
  document.querySelector("body").classList.remove("theme-light");
  document.querySelector("body").classList.add("theme-dark");
} else {
  document.querySelector("body").classList.remove("theme-dark");
  document.querySelector("body").classList.add("theme-light");
}

darkMode.addEventListener("change", (e) => {
  if (darkMode.checked) {
    document.querySelector("body").classList.remove("theme-light");
    document.querySelector("body").classList.add("theme-dark");
  } else {
    document.querySelector("body").classList.remove("theme-dark");
    document.querySelector("body").classList.add("theme-light");
  }
});

//hamburger button
const hamb = document.getElementById("hamburger-button");
const mainNav = document.querySelector("#navbar-main");
if (hamb.checked) {
  mainNav.classList.add("full-screen");
} else {
  mainNav.classList.remove("full-screen");
}

hamb.addEventListener("change", (e) => {
  if (hamb.checked) {
    mainNav.classList.add("full-screen");
  } else {
    mainNav.classList.remove("full-screen");
  }
});
