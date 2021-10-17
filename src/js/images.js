import { setImage } from "./utilities.js";
import profile from "../img/profile-cut.png";
import logo from "../img/logo-nati.svg";

setImage(".avatar", profile, undefined, (image) => {
  image.draggable = false;
});
