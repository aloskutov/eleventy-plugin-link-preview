'use strict';

const getRemotePage = require('./src/getRemotePage');
const getPageData = require('./src/getPageData');

const url = 'https://play.tailwindcss.com/';

getRemotePage(url).then((content) => {
  console.log(getPageData(content, url));
});
