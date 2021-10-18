import {
  generateGallery,
  watchPortfolio,
  showSelectedItem,
  PortfolioItem,
} from "./portfolio-gallery";

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

let portfolioImgObj = [];
const empObj = new PortfolioItem(
  0,
  empDirDesktop,
  empDirMObile,
  "Api employee directory",
  [
    "Communicating with APIs allows you to work with microservices and with vast databases to build useful tools and relevant information quickly and easily. You can build utilities, games, infographics, and more. You can also integrate, display, and analyze social media and large data sets without having to create and curate them yourself.",
    "For this project, I’ve build an app for a fictional company called Awesome Startup, a distributed company with remote employees working all over the world. They need a smart way for employees to share contact information with each other.",
  ],
  "https://nate-mal.github.io/employee_directory/",
  "https://github.com/nate-mal/employee_directory"
);
const gameShowObj = new PortfolioItem(
  1,
  gameShowAppDesktop,
  gameShowAppMobile,
  "Oop Game Show App",
  [
    'In this project I’ve created a browser-based, word guessing game: "Phrase Hunter." I’ve used JavaScript and OOP (Object-Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.',
    "Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the gameboard displays the chosen letters on the screen.",
  ],
  "https://nate-mal.github.io/game_show_app/",
  "https://github.com/nate-mal/game_show_app"
);
const onlineFormObj = new PortfolioItem(
  2,
  onlineFormDesktop,
  onlineFormMobile,
  "Online Form",
  [
    'In this project I’ve  created a responsive, mobile-friendly registration form using a wide variety of HTML form input types and attributes, a "mobile-first" approach.',
    "This is an old project although, see the present contact section 😅",
  ],
  "https://nate-mal.github.io/online_registration_form/",
  "https://github.com/nate-mal/online_registration_form"
);
const photoGalleryObj = new PortfolioItem(
  3,
  photoGalleryDesktop,
  photoGalleryMobile,
  " Interactive Photo Gallery",
  [
    "In this project I’ve  created an interactive photo gallery using JavaScript and CSS Grid Layout. At the top of the page is a search area where photos will hide and show depending on user input. ",
    'When the user clicks on a thumbnail, the photo will display in a lightbox where are "back" and "previous" arrows to cycle through photos.',
  ],
  "https://nate-mal.github.io/photo-gallery/",
  "https://github.com/nate-mal/photo-gallery"
);
const responsiveLayoutObj = new PortfolioItem(
  4,
  responsiveLayoutDesktop,
  responsiveLayoutMobile,
  "About this project",
  [
    "In this project I've build a responsive, mobile-first layout using HTML and CSS",
    "This is an old project 😅",
  ],
  "https://nate-mal.github.io/first_responsive_layout/",
  "https://github.com/nate-mal/first_responsive_layout/"
);
const webAppObj = new PortfolioItem(
  5,
  webAppDesktop,
  webAppMobile,
  "About this project",
  [
    'Many websites do more than just give you information. Sites like GitHub, Zillow, Mint and Facebook let users do things. They act like programs you run on your computer. These web applications, often include pages for looking at your profile, what you\'ve done in the week or what you need to get done. These "dashboards" act like your control panel for controlling the web app.',
    "In this project I’ve  took  a mockup and a few icons and built a beautiful, web dashboard complete with JavaScript-driven charts and graphs. ",
  ],

  "https://nate-mal.github.io/web_app_dashboard/",
  "https://github.com/nate-mal/web_app_dashboard/"
);

portfolioImgObj.push(empObj);
portfolioImgObj.push(gameShowObj);
portfolioImgObj.push(onlineFormObj);
portfolioImgObj.push(photoGalleryObj);
portfolioImgObj.push(responsiveLayoutObj);
portfolioImgObj.push(webAppObj);

export { portfolioImgObj };
generateGallery().then(watchPortfolio(showSelectedItem));
