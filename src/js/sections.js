const heroTexts = document.querySelectorAll(".hero-text-group");

heroTexts.forEach((heroText) => {
  const findMe = heroText.querySelector(".find-me");
  heroText.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("find-me") &&
      !findMe.classList.contains("expand")
    ) {
      findMe.classList.add("expand");
    } else if (!e.target.classList.contains("find-me")) {
      findMe.classList.remove("expand");
    }
  });
});

// const logoHook = document.querySelector(".hook-logo");
// logoHook.addEventListener("mutation", () => {
//   if (logoHook.classList.contains("active")) {
//     document.querySelector(".logo").style.position = "absolute";
//   }
// });

// function callback() {
//   document.querySelector(".logo").style.position = "absolute";
// }

// function callback(mutationsList, observer) {
//   console.log("Mutations:", mutationsList);
//   console.log("Observer:", observer);
// }

const logo = document.querySelector(".logo");
function hookLogo(mutationsList) {
  mutationsList.forEach((mutation) => {
    if (mutation.attributeName === "class") {
      if (document.querySelector(".hook-logo").classList.contains("active")) {
        logo.classList.remove("logo-fixed");
      } else if (!logo.classList.contains("logo-fixed")) {
        logo.classList.add("logo-fixed");
      }
    }
  });
}
const mutationObserver = new MutationObserver(hookLogo);
mutationObserver.observe(document.querySelector(".hook-logo"), {
  attributes: true,
});
function hookLogoFooter(mutationsList) {
  mutationsList.forEach((mutation) => {
    if (mutation.attributeName === "class") {
      if (
        document.querySelector(".hook-logo-footer").classList.contains("active")
      ) {
        logo.classList.add("logo-hide");
      } else {
        logo.classList.remove("logo-hide");
        if (!logo.classList.contains("logo-fixed"))
          logo.classList.add("logo-fixed");
      }
    }
  });
}
const mutationObserverFooter = new MutationObserver(hookLogoFooter);
mutationObserverFooter.observe(document.querySelector(".hook-logo-footer"), {
  attributes: true,
});

// function component() {
//   let m = document.createElement("main");
//   let p = document.createElement("p");
//   let img = document.createElement("img");
//   m.append(p);
//   p.append(img);
//   img.src = logo;
//   img.alt = "sample logo";
//   return m;
// }

// export default component;
