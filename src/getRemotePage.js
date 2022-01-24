'use strict';

const axios = require('axios');

/**
 * Get remote page content
 * @param {string} url
 * @return {string}
 */
const getRemotePage = async (url) => {
  return axios.get(url).
      then((response) => response.data).
      catch((error) => {
        console.log('Requested URL: ', url);
        console.log('Error: ', error.message);
        return false;
      });
};

module.exports = getRemotePage;
