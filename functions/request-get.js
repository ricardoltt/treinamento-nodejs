const axios = require("axios");

module.exports = (url) => {
  return axios.get(url);
};
