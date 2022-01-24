'use strict';

const getRemotePage = require('./src/getRemotePage');
const getPageData = require('./src/getPageData');
const getHtml = require('./src/getHtml');

const url = 'https://dev.to/';

getRemotePage(url).then((content) => {
  const data = content ? getPageData(content, url) : false;
  const result = (data && data !== {}) ? getHtml(data) : '';
  console.log(result);
});
