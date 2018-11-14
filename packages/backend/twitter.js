const base64 = require('base-64');
const configs = require('./configs');
const axios = require('axios');

const formatError = (e) => {
  let error;
  if (e.response) {
    error = e.response.data;
  } else if (e.request) {
    error = e.request;
  } else {
    error = e;
  }
  return error;
};

const getBearerToken = async () => {
  const apiKey = encodeURI(configs.API_KEY);
  const apiSecretKey = encodeURI(configs.API_SECRET);
  const authString = `${apiKey}:${apiSecretKey}`;
  const encodedAuthString = base64.encode(authString);
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Accept-Encoding': 'gzip',
    Authorization: `Basic ${encodedAuthString}`,
  };
  const url = `${configs.API_BASE_URL}oauth2/token`;
  const params = {
    grant_type: 'client_credentials',
  };
  let response;

  try {
    response = await axios.post(url, undefined, { headers, params });
    response = { ...response.data, error: null };
  } catch (e) {
    let error = formatError(e);
    response = { error, token_type: null, access_token: null };
  }

  return response;
};

class Twitter {
  constructor() {
    this.authData = null;
    this.client = axios;
    this.baseUrl = configs.API_BASE_URL;
  }

  async setAuthData() {
    this.authData = await getBearerToken();
  }

  async get(resourceUrl) {
    const url = `${this.baseUrl}${resourceUrl}`;
    if (!this.authData) {
      await this.setAuthData();
    }
    // TODO: improve this to do error handling (return an error if token type isn't bearer)
    // see https://developer.twitter.com/en/docs/basics/authentication/overview/application-only
    const { token_type, access_token, error } = this.authData;
    const headers = {
      Authorization: `Bearer ${access_token}`,
    };
    let response;
    try {
      response = await this.client.get(url, { headers });
    } catch (e) {
      response = formatError(e);
    }
    return response;
  }
}

const twitter = new Twitter();

module.exports = twitter;
