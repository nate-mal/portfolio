import { setImage, setImageAll } from "./utilities.js";
import EmpDirDesktop from "../img/portfolio/employee-directory/desktop.png";

const desktopImagesPath = [
  EmpDirDesktop,
  EmpDirDesktop,
  EmpDirDesktop,
  EmpDirDesktop,
  EmpDirDesktop,
  EmpDirDesktop,
];
let desktopImagesObject = [];

const portfolio = document.getElementById("portfolio");
// function appendImage() {
//   let image = document.createElement("img");
//   portfolio.appendChild(image);
//   setImage(image, EmpDirDesktop, EmpDirDesktop);
// }
// appendImage();

function generateGallery() {
  //create an container for portfolio section
  const portfolioContainer = document.createElement("div");
  portfolioContainer.classList.add("container");

  //create and append the menu icon for the gallery insite portfolioCOntainer{
  const menuIcon = document.createElement("a");
  menuIcon.href = "#none";
  menuIcon.classList.add("menu");
  menuIcon.innerHTML = `<svg   class="menu" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
    </svg>`;
  portfolioContainer.appendChild(menuIcon);

  //create a row inside the container
  const portfolioFirstRow = document.createElement("div");
  portfolioFirstRow.classList.add("row");
  //append portfolio-row to the container and then to the portfolio
  portfolioContainer.appendChild(portfolioFirstRow);
  portfolio.appendChild(portfolioContainer);

  desktopImagesPath.forEach((path) => {
    let image = document.createElement("img");
    image.classList.add("portfolio-image");
    const imageWrapper = document.createElement("a");
    imageWrapper.href = "#none";
    imageWrapper.classList.add(
      "portfolio-item",
      "col-12",
      "col-md-6",
      "col-lg-4"
    );
    imageWrapper.appendChild(image);
    portfolioFirstRow.appendChild(imageWrapper);
    setImage(image, path, path);
  });
  return Promise.resolve();
}

generateGallery().then(watchPortfolio);
function watchPortfolio() {
  portfolio.addEventListener("click", (e) => {
    const portfolioContent = portfolio.querySelectorAll(".portfolio-item");
    function hideItems() {
      if (portfolio.classList.contains("show"))
        portfolio.classList.remove("show");
      portfolioContent.forEach((item) => {
        item.classList.remove("selected");
      });
      portfolio.classList.add("show");
    }
    function showItems() {
      portfolioContent.forEach((item) => {
        item.classList.remove("selected");
      });
      portfolio.classList.remove("show");
    }

    if (e.target.classList.contains("portfolio-image")) {
      hideItems();
      const selectedItem = e.target.parentNode;
      selectedItem.classList.add("selected");
    } else if (e.target.classList.contains("menu")) {
      showItems();
    }
  });
}
// const galleryContent = `
//   <div class="container"
//        <div class="row">
//           </div class="portfolio-item col-12 col-sm-6 col-md-4">
//           <img class="portfolio-image" src="">
//           </div>
//         </div class="portfolio-item col-12 col-sm-6 col-md-4">
//         <img class="portfolio-image" src="">
//         </div>
//       </div class="portfolio-item col-12 col-sm-6 col-md-4">
//       <img class="portfolio-image" src="$">
//       </div>
//       </div>
// `;

// portfolio.innerHTML = galleryContent;
