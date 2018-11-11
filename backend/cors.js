/**
 * A simple middleware to enable CORS
 * */
const CORS = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); //Allow all domains to access the api
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token',
  ); // Headers allowed in a request
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'POST, GET'); //Methods allowed
    return res.status(200).json({});
  } else {
    next();
  }
};

module.exports = CORS;
