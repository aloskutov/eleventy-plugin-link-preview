'use strict';

/**
 * Get url string
 * @param {string} url
 * @return {string}
 */
const getUrl = (url) => url ? url : '';

/**
 * Get title string
 * @param {string} title
 * @return {string}
 */
const getTitle = (title) => title ? title : '';

/**
 * Get description string
 * @param {string} description
 * @return {string}
 */
const getDescription = (description) => description ? description : '';

/**
 * Get domain string
 * @param {string} domain
 * @return {string}
 */
const getDomain = (domain) => domain ? domain : '';

/**
 * Get image string
 * @param {string} image
 * @return {string}
 */
const getImage = (image) => image ? `<div class="link-preview__image" style="background-image: url(${image});"></div>` : '';

/**
 * Get html code
 * @param {object} data
 * @return {string}
 */
const getHtml = (data = {}) => `<div class="link-preview">
  <a class="link-preview__link" href='${getUrl(data.url)}'>
    <div class="link-preview__wrapper">
      <div class="link-preview__content">
        <div class="link-preview__title">${getTitle(data.title)}</div>
        <div class="link-preview__description">${getDescription(data.description)}</div>
        <div class="link-preview__domain">${getDomain(data.domain)}</div>
      </div>${getImage(data.image)}
    </div>
  </a>
</div>`;

module.exports = getHtml;
