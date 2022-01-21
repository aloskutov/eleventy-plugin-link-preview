'use strict';

const axios = require('axios');

/**
 * Get remote page content
 * @param {string} url
 * @return {string}
 */
const getRemotePage = async (url) => {
  return axios.get(url).then((response) => response.data);
};

module.exports = getRemotePage;
