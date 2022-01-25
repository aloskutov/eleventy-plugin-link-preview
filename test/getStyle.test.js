'use strict';

const getStyle = require('../src/getStyle');
const result = `<style>
.link-preview {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0;
  box-shadow: inset 0 0 0 1px rgb(230 230 230);
}
.link-preview__link {
  text-decoration: none;
}
.link-preview__wrapper {
  display: flex;
  flex-wrap: wrap;
}
.link-preview__content {
  padding: 8px;
  display: flex;
  flex: 1 1 270px;
  min-width: 270px;
  height: 168px;
  justify-content: center;
  flex-direction: column;
}
.link-preview__title {
  font-weight: 600;
  line-height: 24px;
  max-height: 50px;
  font-size: 20px;
  color: hsl(219, 25%, 25%);
  font-family: fell, Georgia, Cambria, "Times New Roman", Times, serif;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
.link-preview__description {
  margin-top: 8px;
  color: hsl(220, 15%, 30%);
  line-height: 20px;
  font-weight: 400;
  min-width: 240px;
  max-height: 40px;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  font-size: 16px;
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.link-preview__domain {
  margin-top: 12px;
  color: hsl(221, 10%, 40%);
}
.link-preview__image {
  display: block;
  padding: 0;
  margin: 0;
  flex: 0 0 clamp(310px, (606px - 100vw) * 1000, 100%);
  height: clamp(168px, (606px - 100vw) * 1000, auto);
  background-position: 0% 50%;
  background-size: cover;
  background-origin: border-box;
  aspect-ratio: 1.9;
  box-shadow: inset 0 0 0 1px rgb(230 230 230);
}
</style>`;

test('Get style #1', () => {
  expect(getStyle()).toBe(result);
});
