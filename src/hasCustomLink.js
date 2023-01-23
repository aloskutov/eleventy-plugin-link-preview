'use strict';

const parseURL = require('./parseURL');

/**
 * hasCustomLink
 *
 * @param {string} url
 * @param {object} options
 * @return {object|false}
 */
module.exports = (url, options = {}) => {
  let result = false;
  if (Object.hasOwn(options, 'customLink') && Object.hasOwn(options.customLink, url))
  {
    result = options.customLink[url];
    result.url = url;
    result.domain = result.domain ?
      result.domain :
      parseURL(url).groups.hostname;
  }
  return result;
};
