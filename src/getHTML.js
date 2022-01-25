'use strict';

/**
 * Get url string
 * @param {string} url
 * @return {string}
 */
const getUrl = (url) => {
  return url ? url : '';
};

/**
 * Get title string
 * @param {string} title
 * @return {string}
 */
const getTitle = (title) => {
  return title ? title : '';
};

/**
 * Get description string
 * @param {string} description
 * @return {string}
 */
const getDescription = (description) => {
  return description ? description : '';
};

/**
 * Get domain string
 * @param {string} domain
 * @return {string}
 */
const getDomain = (domain) => {
  return domain ? domain : '';
};

/**
 * Get image string
 * @param {string} image
 * @return {string}
 */
const getImage = (image) => {
  return image ? ` style='background-image: url(${image});'` : '';
};

/**
 * Get html code
 * @param {object} data
 * @return {string}
 */
const getHtml = (data = {}) => {
  return `<div class="link-preview">
  <a class="link-preview__link" href='${getUrl(data.url)}'>
    <div class="link-preview__wrapper">
      <div class="link-preview__content">
        <div class="link-preview__title">${getTitle(data.title)}</div>
        <div class="link-preview__description">${getDescription(data.description)}</div>
        <div class="link-preview__domain">${getDomain(data.domain)}</div>
      </div>
      <div class="link-preview__image"${getImage(data.image)}></div>
    </div>
  </a>
</div>`;
};

module.exports = getHtml;
