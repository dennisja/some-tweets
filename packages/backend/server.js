const express = require('express');
const path = require('path');
const CORS = require('./cors');

const twitter = require('./twitter');
const app = express();

// enable CORS => only helps during development
app.use(CORS);

const tweetsUrl = (screenName) =>
  `1.1/statuses/user_timeline.json?count=30&screen_name=${screenName}`;

// server ui
app.use(express.static(path.resolve(__dirname, '../build')));

// end point to fetch tweets
app.get('/tweets', async function(req, res) {
  const tweets = await Promise.all([
    twitter.get(tweetsUrl('MakeSchool')),
    twitter.get(tweetsUrl('newsycombinator')),
    twitter.get(tweetsUrl('ycombinator')),
  ]);
  const {
    0: { data: makeschool },
    1: { data: newsycombinator },
    2: { data: ycombinator },
  } = tweets;
  res.set('Content-Type', 'application/json');
  res.send({
    tweets: {
      makeschool,
      newsycombinator,
      ycombinator,
    },
  });
});

// render application on other requests
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(4004, () => {
  console.log('App started');
  console.log('\x1b[32m%s\x1b[0m', 'http://localhost:4004');
});
