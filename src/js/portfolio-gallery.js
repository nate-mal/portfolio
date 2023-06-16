import { setImage } from "./utilities.js";
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
/**
 *
 * @param {String} gallerySelector  the css selector for the gallery section
 * @param {PortfolioItem Array} portfolioObjectItems the array of PortfolioItem to push in the gallary
 */
function runGallery(gallerySelector, portfolioObjectItems) {
  const portfolio = document.querySelector(gallerySelector);
  const portfolioImgObj = portfolioObjectItems;
  generateGallery().then(watchPortfolio(showSelectedItem));
  function showSelectedItem(id) {
    const selectedItem = portfolioImgObj.find((image) => image.id == id);
    const portfolioRow = portfolio.querySelector(".row");
    //create and append the menu icon for the gallery insite portfolioCOntainer
    const menuIcon = document.createElement("a");
    menuIcon.href = `#${selectedItem.id}`;
    menuIcon.classList.add("command-btn", "menu");
    menuIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
      </svg>`;
    const slideLeft = document.createElement("a");
    slideLeft.href = `#portfolio`;
    slideLeft.classList.add("command-btn", "slide", "slide-left");
    slideLeft.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
    </svg>`;
    const slideRight = document.createElement("a");
    slideRight.href = `#portfolio`;
    slideRight.classList.add("command-btn", "slide", "slide-right");
    slideRight.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>`;
    const comandPanel = document.createElement("div");
    comandPanel.classList.add("command-panel", "col-12");
    comandPanel.appendChild(menuIcon);
    comandPanel.appendChild(slideLeft);
    comandPanel.appendChild(slideRight);
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

    showContainer.appendChild(comandPanel);
    showContainer.appendChild(showMobileWrapper);

    showContainer.appendChild(showDescriptionWrapper);

    showContainer.appendChild(showDesktopWrapper);

    showDescriptionWrapper.classList.add(
      "portfolio-show-item",
      "description",
      "col-12",
      "col-lg-6"
    );
    showDescriptionWrapper.innerHTML = generateShowDescription(
      selectedItem.title,
      selectedItem.bodyText,
      // selectedItem.bodyText[1],
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

    if (selectedItem !== portfolioImgObj[0]) {
      slideLeft.addEventListener("click", () => {
        portfolioRow.removeChild(showContainer);
        showSelectedItem(selectedItem.id - 1);
      });
    } else slideLeft.style.display = "none";

    if (selectedItem !== portfolioImgObj[portfolioImgObj.length - 1]) {
      slideRight.addEventListener("click", () => {
        portfolioRow.removeChild(showContainer);
        showSelectedItem(selectedItem.id + 1);
      });
    } else slideRight.style.display = "none";
  }

  function generateShowDescription(title, paragraphs, siteUrl, sourceUrl) {
    const description = `
 <div class="d-flex flex-column justify-content-lg-center mt-2 mb-5 hero-text-group" style="z-index: 9;">
              <h1 class="display-5">${title}</h1>
               <p class="lead">${paragraphs[0]}</p>
               <p class="lead">${paragraphs.length > 1 ? paragraphs[1] : ""}</p>
               <p class="lead">${paragraphs.length > 2 ? paragraphs[2] : ""}</p>
               <p class="lead">${paragraphs.length > 3 ? paragraphs[3] : ""}</p>
               <p class="lead">${paragraphs.length > 4 ? paragraphs[4] : ""}</p>
               <p class="lead">${paragraphs.length > 5 ? paragraphs[5] : ""}</p>
               <p class="lead">${paragraphs.length > 6 ? paragraphs[6] : ""}</p>
              
              <div
                class="
                  d-flex
                  flex-column
                  align-items-center align-items-md-start
                "
              >
                <div class="mb-5">
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
                <div style="height:7em"></div>
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
    if (portfolio.classList.contains("show"))
      portfolio.classList.remove("show");
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
      if (e.target.classList.contains("portfolio-image")) {
        hideItems();
        const selectedItem = e.target.parentNode;
        selectedItem.classList.add("selected");
        callback(e.target.id);
        return Promise.resolve(selectedItem.id);
      }
    });
  }
}

export { runGallery, PortfolioItem };
