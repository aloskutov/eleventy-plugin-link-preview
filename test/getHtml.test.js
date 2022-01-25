'use strict';

const getHtml = require('../src/getHtml');
const resultEmpty = `<div class="link-preview">
  <a class="link-preview__link" href=''>
    <div class="link-preview__wrapper">
      <div class="link-preview__content">
        <div class="link-preview__title"></div>
        <div class="link-preview__description"></div>
        <div class="link-preview__domain"></div>
      </div>
      <div class="link-preview__image"></div>
    </div>
  </a>
</div>`;

test('Get html #1 empty', () => {
  expect(getHtml()).toBe(resultEmpty);
});
