'use strict';

const linkPreview = require('./src/linkPreview');
const getStyle = require('./src/getStyle');

module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode('linkPreview', async (url) => {
    return await linkPreview(url);
  });
  eleventyConfig.addShortcode('linkPreviewCss', () => {
    return getStyle();
  });
};
