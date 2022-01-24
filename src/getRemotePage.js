'use strict';

const axios = require('axios');

/**
 * Get remote page content
 * @param {string} url
 * @return {string}
 */
const getRemotePage = async (url) => {
  return axios.get(url, {'withCredentials': true}).
      then((response) => response.data).
      catch(function(error) {
        if (error.response) {
          // Request made and server responded
          console.log('Status: ', error.response.status);
          console.log('Status text: ', error.response.statusText);
          console.log('Header: ', error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        return false;
      });
};

module.exports = getRemotePage;
