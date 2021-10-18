import { setImage, setImageAll } from "./utilities.js";
import empDirDesktop from "../img/portfolio/emp-dir/desktop.jpg";
import empDirMObile from "../img/portfolio/emp-dir/mobile-1.jpg";
// :::::::::::::::::::::::::::::
import gameShowAppDesktop from "../img/portfolio/game-show-app/desktop.jpg";
import gameShowAppMobile from "../img/portfolio/game-show-app/mobile-1.jpg";
// :::::::::::::::::::::::::::::::
import onlineFormDesktop from "../img/portfolio/online-form/desktop.jpg";
import onlineFormMobile from "../img/portfolio/online-form/mobile-1.jpg";
// ::::::::::::::::::::::::::::::
import photoGalleryDesktop from "../img/portfolio/photo-gallery/desktop.jpg";
import photoGalleryMobile from "../img/portfolio/photo-gallery/mobile-1.jpg";
// ::::::::::::::::::::::::::::::::
import portfolioDarkDesktop from "../img/portfolio/portfolio/desktop-dark.jpg";
import portfolioLightMobile from "../img/portfolio/portfolio/mobile-1-light.jpg";
// ::::::::::::::::::::::::::::::::
import responsiveLayoutDesktop from "../img/portfolio/responsive-layout/desktop.jpg";
import responsiveLayoutMobile from "../img/portfolio/responsive-layout/mobile-1.jpg";
// ::::::::::::::::::::::::::::::::
import webAppDesktop from "../img/portfolio/web-app/desktop.jpg";
import webAppMobile from "../img/portfolio/web-app/mobile-1.jpg";

let portfolioImgObj = [
  { id: 0, desktopUrl: empDirDesktop, mobileUrl: empDirMObile },
  { id: 1, desktopUrl: gameShowAppDesktop, mobileUrl: gameShowAppMobile },
  { id: 2, desktopUrl: onlineFormDesktop, mobileUrl: onlineFormMobile },
  { id: 3, desktopUrl: photoGalleryDesktop, mobileUrl: photoGalleryMobile },
  { id: 4, desktopUrl: portfolioDarkDesktop, mobileUrl: portfolioLightMobile },
  {
    id: 5,
    desktopUrl: responsiveLayoutDesktop,
    mobileUrl: responsiveLayoutMobile,
  },
  { id: 6, desktopUrl: webAppDesktop, mobileUrl: webAppDesktop },
];

const portfolio = document.getElementById("portfolio");
generateGallery().then(watchPortfolio(showSelectedItem));

function showSelectedItem(id) {
  const selectedItem = portfolioImgObj.find((image) => image.id == id);
  const portfolioRow = portfolio.querySelector(".row");
  //create and append the menu icon for the gallery insite portfolioCOntainer
  const menuIcon = document.createElement("div");
  menuIcon.classList.add("menu");
  menuIcon.innerHTML = `<svg   class="menu" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
      </svg>`;

  const image = document.createElement("img");
  const showContainer = document.createElement("div");
  showContainer.id = "showTime";
  showContainer.classList.add("show-container", "col-12");
  portfolioRow.insertBefore(
    showContainer,
    document.getElementById(id).parentNode
  );
  showContainer.appendChild(menuIcon);
  showContainer.appendChild(image);
  setImage(image, selectedItem.desktopUrl, undefined, (image) => {
    image.classList.add("portfolio-show-item");
  });

  menuIcon.addEventListener("click", () => {
    portfolioRow.removeChild(showContainer);
    showItems();
  });
}

/**
 *
 * @param {porfolio image object } this function take the portfolio-item object and
 * generate the thumbnail img and apppend it to the first row in portfolio container
 */
function generatePortfolioItem(path) {
  const portfolioFirstRow = portfolio.querySelector(".row");
  let image = document.createElement("img");
  image.classList.add("portfolio-image");
  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add(
    "portfolio-item",
    "col-12",
    "col-md-6",
    "col-lg-4"
  );
  imageWrapper.appendChild(image);
  portfolioFirstRow.appendChild(imageWrapper);
  setImage(
    image,
    path.desktopUrl,
    path.desktopUrl,
    (image) => (image.id = path.id)
  );
}
/**
 * this function generates  the portfolio items the thumb portfolio-items and appends them to the first row in
 * the portfolio section
 * @returns a promise resove when this is done
 */
function generateGallery() {
  //create an container for portfolio section
  const portfolioContainer = document.createElement("div");
  portfolioContainer.classList.add("container");

  //   //create and append the menu icon for the gallery insite portfolioCOntainer{
  //   const menuIcon = document.createElement("div");
  //   menuIcon.classList.add("menu");
  //   menuIcon.innerHTML = `<svg   class="menu" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  //       <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
  //     </svg>`;
  //   portfolioContainer.appendChild(menuIcon);

  //create a row inside the container
  const portfolioFirstRow = document.createElement("div");
  portfolioFirstRow.classList.add("row");
  //append portfolio-row to the container and then to the portfolio
  portfolioContainer.appendChild(portfolioFirstRow);
  portfolio.appendChild(portfolioContainer);

  portfolioImgObj.forEach((img) => {
    generatePortfolioItem(img);
  });
  return Promise.resolve();
}
function hideItems() {
  const portfolioContent = portfolio.querySelectorAll(".portfolio-item");
  if (portfolio.classList.contains("show")) portfolio.classList.remove("show");
  portfolioContent.forEach((item) => {
    item.classList.remove("selected");
  });
  portfolio.classList.add("show");
}
function showItems() {
  const portfolioContent = portfolio.querySelectorAll(".portfolio-item");
  portfolioContent.forEach((item) => {
    item.classList.remove("selected");
  });
  portfolio.classList.remove("show");
}
/**
 *
 * @param {callback funtion that receive the id of the selected portfolio item } callback
 */
function watchPortfolio(callback) {
  portfolio.addEventListener("click", (e) => {
    // const portfolioContent = portfolio.querySelectorAll(".portfolio-item");
    // function hideItems() {
    //   if (portfolio.classList.contains("show"))
    //     portfolio.classList.remove("show");
    //   portfolioContent.forEach((item) => {
    //     item.classList.remove("selected");
    //   });
    //   portfolio.classList.add("show");
    // }
    // function showItems() {
    //   portfolioContent.forEach((item) => {
    //     item.classList.remove("selected");
    //   });
    //   portfolio.classList.remove("show");
    // }

    if (e.target.classList.contains("portfolio-image")) {
      hideItems();
      const selectedItem = e.target.parentNode;
      selectedItem.classList.add("selected");
      callback(e.target.id);
      return Promise.resolve(selectedItem.id);
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
