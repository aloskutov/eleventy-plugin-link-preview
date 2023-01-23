'use strict';

const parseURL = require('./parseURL');

/**
 * hasLocalData
 *
 * @param {string} url
 * @param {object} options
 * @return {object|false}
 */
module.exports = (url, options = {}) => {
  let result = false;
  if (Object.hasOwn(options, 'localData') && Object.hasOwn(options.localData, url))
  {
    result = options.localData[url];
    result.url = url;
    result.domain = result.domain ?
      result.domain :
      parseURL(url).groups.hostname;
  }
  return result;
};
