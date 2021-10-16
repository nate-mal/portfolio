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
