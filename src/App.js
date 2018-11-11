import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Tweets from './Tweets';
import { LOCAL_API_URL, TWEETS_URL } from './configs';

function App() {
  const [error, setError] = useState(null);
  const [tweets, setTweets] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = `${LOCAL_API_URL}${TWEETS_URL}`;
  useEffect(async () => {
    try {
      const response = await axios.get(url);
      setTweets(response.data.tweets);
      setLoading(false);
    } catch (error) {
      if (error.request) {
        setError(error.request);
      } else if (error.response) {
        setError(error.response);
      } else {
        setError(error);
      }
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>loading..</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return <Tweets tweets={tweets} />;
}

export default App;
