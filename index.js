'use strict';

const getRemotePage = require('./src/getRemotePage');
const getPageData = require('./src/getPageData');
const getHtml = require('./src/getHtml');

const url = 'https://play.tailwindcss.com/';

getRemotePage(url).then((content) => {
  const data = getPageData(content, url);
  if (data != {}) {
    console.log(getHtml(data));
  }
});
