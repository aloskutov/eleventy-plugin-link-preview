'use strict';

const getHtml = require('../src/getHtml.js');

test('Get html #1 empty', () => {
  const resultEmpty = `<div class="link-preview">
  <a class="link-preview__link" href=''>
    <div class="link-preview__wrapper">
      <div class="link-preview__content">
        <div class="link-preview__title"></div>
        <div class="link-preview__description"></div>
        <div class="link-preview__domain"></div>
      </div>
    </div>
  </a>
</div>`;
  expect(getHtml()).toBe(resultEmpty);
});

test('Get html #2', () => {
  const data = {
    title: 'Some title',
    description: 'Some title',
    url: 'https://www.some-url.com/smth/',
    domain: 'Some title',
    image: 'https//link.to/some-image.png',
  };
  const result = `<div class="link-preview">
  <a class="link-preview__link" href='https://www.some-url.com/smth/'>
    <div class="link-preview__wrapper">
      <div class="link-preview__content">
        <div class="link-preview__title">Some title</div>
        <div class="link-preview__description">Some title</div>
        <div class="link-preview__domain">Some title</div>
      </div>
      <div class="link-preview__image" style="background-image: url(https//link.to/some-image.png);"></div>
    </div>
  </a>
</div>`;
  expect(getHtml(data)).toBe(result);
});
