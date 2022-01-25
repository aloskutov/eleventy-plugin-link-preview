'use strict';

const Cache = require('cache');

const getRemotePage = require('./getRemotePage');
const getPageData = require('./getPageData');
const getHtml = require('./getHtml');

const TTL = 1000 * 60 * 60 * 24;
const CACHE_PATH = process.env.temp || process.env.tmp || './';
const CACHE_FILE = CACHE_PATH + '/cache.json';

const cache = new Cache(TTL, CACHE_FILE);

module.exports = (url) => {
  const data = cache.get(url);
  if (data) {
    return getHtml(data);
  } else {
    getRemotePage(url).then((content) => {
      const data = content ? getPageData(content, url) : false;
      cache.put(url, data);
      const result = (data && data !== {}) ? getHtml(data) : '';
      return result;
    });
  }
};
