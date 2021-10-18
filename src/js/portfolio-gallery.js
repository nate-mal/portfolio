import { setImage } from "./utilities.js";
import { portfolioImgObj } from "./runPortfolioGallery.js";

const portfolio = document.getElementById("portfolio");
class PortfolioItem {
  constructor(id, desktopUrl, mobileUrl, title, bodyText, siteUrl, sourceUrl) {
    this.id = id;
    this.desktopUrl = desktopUrl;
    this.mobileUrl = mobileUrl;
    this.title = title;
    this.bodyText = bodyText;
    this.siteUrl = siteUrl;
    this.sourceUrl = sourceUrl;
  }
}
// let portfolioImgObj = [
//   {
//     id: 0,
//     desktopUrl: empDirDesktop,
//     mobileUrl: empDirMObile,
//     title: "Api employee directory",
//     bodyText: [
//       "Communicating with APIs allows you to work with microservices and with vast databases to build useful tools and relevant information quickly and easily. You can build utilities, games, infographics, and more. You can also integrate, display, and analyze social media and large data sets without having to create and curate them yourself.",
//       "For this project, I’ve build an app for a fictional company called Awesome Startup, a distributed company with remote employees working all over the world. They need a smart way for employees to share contact information with each other.",
//     ],
//     siteUrl: "https://nate-mal.github.io/employee_directory/",
//     sourceUrl: "https://github.com/nate-mal/employee_directory",
//   },
//   { id: 1, desktopUrl: gameShowAppDesktop, mobileUrl: gameShowAppMobile },
//   { id: 2, desktopUrl: onlineFormDesktop, mobileUrl: onlineFormMobile },
//   { id: 3, desktopUrl: photoGalleryDesktop, mobileUrl: photoGalleryMobile },
//   { id: 4, desktopUrl: portfolioDarkDesktop, mobileUrl: portfolioLightMobile },
//   {
//     id: 5,
//     desktopUrl: responsiveLayoutDesktop,
//     mobileUrl: responsiveLayoutMobile,
//   },
//   { id: 6, desktopUrl: webAppDesktop, mobileUrl: webAppDesktop },
// ];

// let portfolioImgObj = [];
// const empObj = new PortfolioItem(
//   0,
//   empDirDesktop,
//   empDirMObile,
//   "Api employee directory",
//   [
//     "Communicating with APIs allows you to work with microservices and with vast databases to build useful tools and relevant information quickly and easily. You can build utilities, games, infographics, and more. You can also integrate, display, and analyze social media and large data sets without having to create and curate them yourself.",
//     "For this project, I’ve build an app for a fictional company called Awesome Startup, a distributed company with remote employees working all over the world. They need a smart way for employees to share contact information with each other.",
//   ],
//   "https://nate-mal.github.io/employee_directory/",
//   "https://github.com/nate-mal/employee_directory"
// );
// portfolioImgObj.push(empObj);

// const portfolio = document.getElementById("portfolio");
// generateGallery().then(watchPortfolio(showSelectedItem));

function showSelectedItem(id) {
  const selectedItem = portfolioImgObj.find((image) => image.id == id);
  const portfolioRow = portfolio.querySelector(".row");
  //create and append the menu icon for the gallery insite portfolioCOntainer
  const menuIcon = document.createElement("a");
  menuIcon.href = `#${selectedItem.id}`;
  menuIcon.classList.add("menu", "col-2");
  menuIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
      </svg>`;

  const imageDesktop = document.createElement("img");
  const imageMObile = document.createElement("img");
  const showDescriptionWrapper = document.createElement("div");
  const showMobileWrapper = document.createElement("div");
  const showDesktopWrapper = document.createElement("div");
  const showContainer = document.createElement("div");
  showContainer.id = "showTime";
  showContainer.classList.add("show-container", "row");
  portfolioRow.insertBefore(
    showContainer,
    document.getElementById(id).parentNode
  );
  showContainer.appendChild(menuIcon);
  showContainer.appendChild(showDescriptionWrapper);
  showContainer.appendChild(showMobileWrapper);
  showContainer.appendChild(showDesktopWrapper);

  showDescriptionWrapper.classList.add(
    "portfolio-show-item",
    "description",
    "col-12",
    "col-lg-6"
  );
  showDescriptionWrapper.innerHTML = generateShowDescription(
    selectedItem.title,
    selectedItem.bodyText[0],
    selectedItem.bodyText[1],
    selectedItem.siteUrl,
    selectedItem.sourceUrl
  );
  showMobileWrapper.classList.add(
    "portfolio-show-item",
    "mobile",
    "col-12",
    "col-lg-4"
  );
  showMobileWrapper.appendChild(imageMObile);

  showDesktopWrapper.classList.add(
    "portfolio-show-item",
    "desktop",
    "col-12",
    "col-lg-12"
  );
  showDesktopWrapper.appendChild(imageDesktop);

  setImage(imageDesktop, selectedItem.desktopUrl);
  setImage(imageMObile, selectedItem.mobileUrl);
  menuIcon.addEventListener("click", () => {
    portfolioRow.removeChild(showContainer);
    showItems();
  });
}

function generateShowDescription(title, firstP, secondP, siteUrl, sourceUrl) {
  const description = `
 <div class="d-flex flex-column justify-content-lg-center my-5 hero-text-group">
              <h1 class="display-5 mt-5">${title}</h1>
              <p class="lead">
                ${firstP}
              </p>
              <p class="lead">
                ${secondP}
              </p>

              <div
                class="
                  d-flex
                  flex-column
                  align-items-center align-items-md-start
                "
              >
                <div class="mt-5">
                  <a href="${siteUrl}" target="_blank" class="btn btn-danger btn-lg m-1">
                    Live Website
                  </a>
                  <a href="${sourceUrl}" target="_blank"
                    
                    class="btn btn-outline-danger btn-lg m-1"
                  >
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
                    View Source
              </a>
                </div>
              </div>
              </div>
              `;
  return description;
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
  const imageWrapper = document.createElement("a");
  imageWrapper.href = "#portfolio";
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

export { generateGallery, watchPortfolio, showSelectedItem, PortfolioItem };
