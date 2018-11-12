import React from 'react';
import { TweetFooter, TweetTime } from './styled';
import { timeAgo } from './utils';

const Tweet = ({ tweet: { id, retweet_count, text, created_at } }) => (
  <React.Fragment>
    {text}
    <TweetFooter>
      <TweetTime>{timeAgo(created_at)}</TweetTime>
    </TweetFooter>
  </React.Fragment>
);

export default Tweet;
