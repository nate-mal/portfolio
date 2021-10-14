/**
 * this is an awsome function will set the url alt of a given image triggerd by css selector
 *  and optionaly use a callback to set other things
 * @param {css selector} selector
 * @param {the path for the image} path
 * @param {descripton} alt
 * @param {callbac funtion that take the image that was set up as @param} callback
 */
function setImage(selector, path, alt = "", callback = () => {}) {
  const image = document.querySelector(selector);
  image.src = path;
  image.alt = alt;
  callback(image);
}
