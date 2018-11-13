import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';

import Tweets from './Tweets';
import { FAB } from './styled';
import useTweetsResponse from './useTweetsResponse';
import { TweetsSortContext } from './context';

function App() {
  const { tweets, loading, error, setTweets } = useTweetsResponse();

  if (loading) {
    return <div>loading..</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <TweetsSortContext.Provider value={{ setTweets }}>
      <Tweets tweets={tweets} />
      <FAB aria-label="Edit Layout" id="edit-layout">
        <FaPencilAlt />
      </FAB>
    </TweetsSortContext.Provider>
  );
}

export default App;
