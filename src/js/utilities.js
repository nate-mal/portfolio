/**
 * this is an awsome function will set the url alt of a given image object
 *  and optionaly use a callback to set other things
 * @param {image} object image
 * @param {the path for the image} path
 * @param {descripton} alt
 * @param {callbac funtion that take the image that was set up as @param} callback
 */
function setImage(image, path, alt = "", callback = () => {}) {
  image.src = path;
  image.alt = alt;
  callback(image);
}
/**
 * this is an awsome function will set the url alt of a all  array images
 *  and optionaly use a callback to set other things
 * @param {image} object image
 * @param {the path for the image} path
 * @param {descripton} alt
 * @param {callbac funtion that take the image that was set up as @param} callback
 */
function setImageAll(images, path, alt = "", callback = () => {}) {
  images.forEach(() => {
    setImage(selector, path, alt, callback);
  });
}

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

export { setImage, setImageAll, PortfolioItem };
