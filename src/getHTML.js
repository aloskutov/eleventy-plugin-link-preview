'use strict';

const getImage = (image) => {
  return image ? ` style='background-image: url(${image});'` : '';
};

const getHtml = (data) => {
  return `<div class="link-preview">
  <a class="link-preview__link" href='${data.url}'>
    <div class="link-preview__wrapper">
      <div class="link-preview__content">
        <div class="link-preview__title">${data.title}</div>
        <div class="link-preview__description">${data.description}</div>
        <div class="link-preview__domain">${data.domain}</div>
      </div>
      <div class="link-preview__image"${getImage(data.image)}></div>
    </div>
  </a>
</div>`;
};

module.exports = getHtml;
