///dark mode switcher
const darkMode = document.getElementById("switch-theme");
const body = document.querySelector("body");
if (darkMode.checked) {
  body.classList.remove("theme-light");
  body.classList.add("theme-dark");
} else {
  body.classList.remove("theme-dark");
  body.classList.add("theme-light");
}

darkMode.addEventListener("change", (e) => {
  if (darkMode.checked) {
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
  } else {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
  }
});

//hamburger button
const hamb = document.getElementById("hamburger-button");
const mainNav = document.querySelector("#navbar-main");
if (hamb.checked) {
  mainNav.classList.add("full-screen");
} else {
  mainNav.classList.remove("full-sreen");
}

hamb.addEventListener("change", (e) => {
  if (hamb.checked) {
    mainNav.classList.add("full-screen");
  } else {
    mainNav.classList.remove("full-screen");
  }
});

const customNavGroup = document.querySelector(".custom-nav-group");

//function that return a fulfield promise when the scrolling ended
function waitForScrollEnd() {
  let last_changed_frame = 0;
  let last_x = window.scrollX;
  let last_y = window.scrollY;

  return new Promise((resolve) => {
    function tick(frames) {
      // We requestAnimationFrame either for 500 frames or until 20 frames with
      // no change have been observed.
      if (frames >= 500 || frames - last_changed_frame > 20) {
        resolve();
      } else {
        if (window.scrollX != last_x || window.scrollY != last_y) {
          last_changed_frame = frames;
          last_x = window.scrollX;
          last_y = window.scrollY;
        }
        requestAnimationFrame(tick.bind(null, frames + 1));
      }
    }
    tick(0);
  });
}

customNavGroup.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-link")) {
    if (hamb.checked) {
      waitForScrollEnd().then(() => {
        hamb.click();
      });
    }
  }
});

try {
  function syncBrandName(mutationsList) {
    waitForScrollEnd().then(() => {
      mutationsList.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const customLinks = document.querySelectorAll(".custom-nav-link");

          customLinks.forEach((link) => {
            if (link.classList.contains("active")) {
              const brandName = document.querySelector(".navbar-brand");
              brandName.textContent = link.textContent;
            }
          });
        }
      });
    });
  }

  const mutationObserverNav = new MutationObserver(syncBrandName);
  mutationObserverNav.observe(document.querySelector(".custom-nav-group"), {
    attributes: true,
    childList: true,
    subtree: true,
  });
} catch (e) {
  console.error("navigation error: ", e.message);
}
