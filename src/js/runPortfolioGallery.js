import { runGallery, PortfolioItem } from "./portfolio-gallery";

import empDirDesktop from "../img/portfolio/emp-dir/desktop.webp";
import empDirMObile from "../img/portfolio/emp-dir/mobile-1.webp";
// :::::::::::::::::::::::::::::
import gameShowAppDesktop from "../img/portfolio/game-show-app/desktop.webp";
import gameShowAppMobile from "../img/portfolio/game-show-app/mobile-1.webp";
// :::::::::::::::::::::::::::::::
import onlineFormDesktop from "../img/portfolio/online-form/desktop.webp";
import onlineFormMobile from "../img/portfolio/online-form/mobile-1.webp";
// ::::::::::::::::::::::::::::::
import photoGalleryDesktop from "../img/portfolio/photo-gallery/desktop.webp";
import photoGalleryMobile from "../img/portfolio/photo-gallery/mobile-1.webp";
// ::::::::::::::::::::::::::::::::
import portfolioDarkDesktop from "../img/portfolio/portfolio/desktop-dark.webp";
import portfolioLightMobile from "../img/portfolio/portfolio/mobile-1-light.webp";
// ::::::::::::::::::::::::::::::::
import responsiveLayoutDesktop from "../img/portfolio/responsive-layout/desktop.webp";
import responsiveLayoutMobile from "../img/portfolio/responsive-layout/mobile-1.webp";
// ::::::::::::::::::::::::::::::::
import nextEventDesktop from "../img/portfolio/next-events/desktop.webp";
import nextEventMobile from "../img/portfolio/next-events/mobile-1.webp";
// ::::::::::::::::::::::::::::::::
import webAppDesktop from "../img/portfolio/web-app/desktop.webp";
import webAppMobile from "../img/portfolio/web-app/mobile-1.webp";
// ::::::::::::::::::::::::::::::::
import artCafeDesktop from "../img/portfolio/artcafe-store/desktop.webp";
import artCafeMobile from "../img/portfolio/artcafe-store/mobile-1.webp";

import foodMenuDesktop from "../img/portfolio/food-menu/desktop.webp";
import foodMenuMobile from "../img/portfolio/food-menu/mobile-1.webp";

import blogDesktop from "../img/portfolio/blog/desktop.webp";
import blogMobile from "../img/portfolio/blog/mobile-1.webp";

let portfolioImgObj = [];
const artCafeObj = new PortfolioItem(
  0,
  artCafeDesktop,
  artCafeMobile,
  "Art Cafe Store",
  [
    "As a passionate developer, I recently built an e-commerce website using Next.js and Strapi, with payment processing powered by Stripe. The website specializes in selling coffee machine parts, refurbished coffee machines, and offers repair services for coffee machines.",

    "To make the site easy to navigate, I designed a clean and intuitive user interface, with a prominent instant search box built with meilisearch  that allows users to quickly search for specific products or browse by category.",

    "I built out the Coffee Machine Parts section with a wide selection of parts for different types of coffee machines. Each product page includes high-quality images, detailed descriptions, and customer reviews to help users make informed purchasing decisions.",

    "To make it easy for customers to schedule a repair, I built out the Repair Services section, which offers a variety of services, from basic maintenance to troubleshooting and repairs. The Reparo Estimate section features a simple quiz to estimate the cost of repairing a broken coffee machine.",

    "To handle payment processing, I integrated Stripe into the site's checkout process, ensuring that customer payment information is kept secure.",

    "Ah, I almost forgot to mention that I also integrated instant search functionality into the e-commerce website using MeiliSearch. This means that customers can quickly and easily find the products they're looking for with just a few keystrokes.",

    "Overall, building this e-commerce website was a challenging and rewarding project. I was able to leverage Next.js and Strapi to create a fast, responsive, and user-friendly website that meets the needs of coffee machine enthusiasts everywhere.",
    "Thanks to MeiliSearch's lightning-fast search algorithms and real-time indexing, customers can see search results as they type, making it easy to quickly refine their search and find exactly what they're looking for.",

    "Overall, integrating instant search functionality using MeiliSearch was a great addition to the e-commerce website, improving the user experience and making it even easier for customers to find the products they need.",
  ],

  "https://www.artcafe.store",
  "https://github.com/nate-mal"
);

const blogObj = new PortfolioItem(
  1,
  blogDesktop,
  blogMobile,
  "Simple blog",
  [
    "As a passionate dev I whipped up a sweet little blog using Next.js. It's a pretty basic setup with two pages - one for the featured posts and one for all the posts.",
    "The site itself is pretty straightforward, with a clean and easy-to-use design. Navigation is simple and intuitive, so folks won't get lost trying to find what they're looking for.",

    "I used Next.js to build the blog because it's super fast and efficient. It's perfect for a blog like this because it loads quickly and keeps things running smoothly. Plus, Next.js makes it easy to generate the site statically, which is great for SEO and performance.",

    "Overall, I'm stoked with how this little blog turned out. It's a great showcase of what you can do with Next.js, and I'm sure it'll be a hit with readers!",
  ],
  "https://next-blog-gray-eta.vercel.app/posts/",
  "https://github.com/nate-mal/next-blog/tree/master"
);
const foodMenuObj = new PortfolioItem(
  2,
  foodMenuDesktop,
  foodMenuMobile,
  "Restaurant Menu",
  [
    "I recently worked on building a restaurant menu website that includes a number of great features to make it easy for customers to browse the menu, place orders, and communicate with the waitstaff.",

    "One of the key features of the website is the ability to filter products by category or search by name. Customers can easily navigate to specific sections of the menu, such as entrees or desserts, or they can use the search bar to quickly find their favorite dishes.",

    "Once a customer has selected the items they want to order, they can send their order directly to the waiter or waitress assigned to their table. This feature helps to streamline the ordering process and minimize wait times, allowing customers to enjoy their meals without unnecessary delays.",

    "To make the website as user-friendly as possible, I designed a clean and intuitive user interface that's easy to navigate on any device. Whether customers are using a desktop computer, tablet, or smartphone, they can easily browse the menu, place orders, and communicate with the waitstaff.",

    "Overall, building this restaurant menu website was a fun and rewarding project. By including features like category filters, search functionality, and direct ordering, we were able to create a seamless and enjoyable dining experience for customers.",
  ],
  "https://next-food-menu.vercel.app",
  "https://github.com/nate-mal/next-food-menu/tree/master"
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
// const responsiveLayoutObj = new PortfolioItem(
//   4,
//   responsiveLayoutDesktop,
//   responsiveLayoutMobile,
//   "About this project",
//   [
//     "In this project I've build a responsive, mobile-first layout using HTML and CSS",
//     "This is an old project 😅",
//   ],
//   "https://nate-mal.github.io/first_responsive_layout/",
//   "https://github.com/nate-mal/first_responsive_layout/"
// );
const nextEventObj = new PortfolioItem(
  4,
  nextEventDesktop,
  nextEventMobile,
  "Next Events",
  [
    "The website is designed to showcase upcoming events in a variety of categories, such as concerts, festivals, and cultural events. Each event is highlighted with a high-quality image, a brief description, and relevant details like the date and location.",

    "One of the key features of the website is its easy-to-use search function. Visitors can easily search for events by date.",
    "To make the website as user-friendly as possible, I designed a clean and intuitive user interface that's easy to navigate on any device. The website is optimized for mobile devices, so users can browse events and read articles on the go.",
    "Overall, building this website was a fun and rewarding project. By including features like a robust search function, high-quality images, and informative blog content, I was able to create a site that's both useful and engaging for visitors.",
  ],
  "https://next-events-vert.vercel.app/events/",
  "https://github.com/nate-mal/next-events/"
);
const webAppObj = new PortfolioItem(
  5,
  webAppDesktop,
  webAppMobile,
  "About this project",
  [
    "Many websites do more than just give you information. Sites like GitHub, Zillow, Mint and Facebook let users do things. They act like programs you run on your computer. These web applications, often include pages for looking at your profile, what you've done in the week or what you need to get done.",
    "In this project I’ve  took  a mockup and a few icons and built a beautiful, web dashboard complete with JavaScript-driven charts and graphs. ",
  ],

  "https://nate-mal.github.io/web_app_dashboard/",
  "https://github.com/nate-mal/web_app_dashboard/"
);
const empObj = new PortfolioItem(
  6,
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

const onlineFormObj = new PortfolioItem(
  7,
  onlineFormDesktop,
  onlineFormMobile,
  "Online Form",
  [
    'In this project I’ve  created a responsive, mobile-friendly registration form using a wide variety of HTML form input types and attributes, a "mobile-first" approach.',
    "This is an old project although 😅",
  ],
  "https://nate-mal.github.io/online_registration_form/",
  "https://github.com/nate-mal/online_registration_form"
);

const gameShowObj = new PortfolioItem(
  8,
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

portfolioImgObj.push(artCafeObj);
portfolioImgObj.push(blogObj);
portfolioImgObj.push(foodMenuObj);
portfolioImgObj.push(photoGalleryObj);
portfolioImgObj.push(nextEventObj);
portfolioImgObj.push(webAppObj);
portfolioImgObj.push(empObj);
portfolioImgObj.push(onlineFormObj);
portfolioImgObj.push(gameShowObj);

runGallery("#portfolio-content", portfolioImgObj);
