const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '.env') });

const { API_KEY, API_SECRET } = process.env;

const configs = {
  API_KEY,
  API_SECRET,
  API_BASE_URL: 'https://api.twitter.com/',
};

module.exports = configs;
