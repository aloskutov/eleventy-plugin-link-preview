'use strict';

const linkPreview = require('./src/linkPreview');
const getStyle = require('./src/getStyle');

module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode('linkPreview', async (url) => {
    const result = await linkPreview(url);
    return result;
  });
  eleventyConfig.addShortcode('linkPreviewCss', () => {
    return getStyle();
  });
};
