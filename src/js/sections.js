const heroText = document.querySelector(".hero-text-group");

const findMe = document.querySelector(".find-me");

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
