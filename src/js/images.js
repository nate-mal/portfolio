import { setImage, setImageAll } from "./utilities.js";
import profile from "../img/profile-cut.png";
import profileAbout from "../img/avatar-about.png";
import logo from "../img/logo-nati.svg";

setImage(document.querySelector(".avatar"), profile, undefined, (image) => {
  image.draggable = false;
});
setImage(
  document.querySelector(".avatar-about"),
  profileAbout,
  undefined,
  (image) => {
    image.draggable = false;
  }
);
