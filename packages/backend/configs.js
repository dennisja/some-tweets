const dotenv = require('dotenv');
dotenv.load();

const { API_KEY, API_SECRET } = process.env;

const configs = {
  API_KEY,
  API_SECRET,
  API_BASE_URL: 'https://api.twitter.com/',
};

module.exports = configs;
