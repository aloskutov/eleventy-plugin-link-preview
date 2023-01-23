'use strict';

const Cache = require('cache');
const process = require('process');

const getRemotePage = require('./getRemotePage');
const getPageData = require('./getPageData');
const getHtml = require('./getHtml');
const hasLocalData = require('./hasLocalData');

const CACHE_TTL = 1000 * 60 * 60 * 24 * 7; // 1 week
const CACHE_PATH = process.env.temp || process.env.tmp || './';
const CACHE_FILE = `${CACHE_PATH}/cache-data.json`;

const c = new Cache(CACHE_TTL, CACHE_FILE);

/**
 * Link preview
 * @param {string} url
 * @return {string}
 */
const linkPreview = async (url, options = {}) => {
  let result = '';
  const localData = hasLocalData(url, options);
  const cachedData = c.get(url);
  if (cachedData) {
    result = cachedData;
  }
  else if (localData) {
    result = getHtml(localData);
  }
  else {
    await getRemotePage(url).then((content) => {
      const data = content ? getPageData(content, url) : false;
      result = (data) ? getHtml(data) : '';
      c.put(url, result);
    });
  }
  return Promise.resolve(result);
};

module.exports = linkPreview;
