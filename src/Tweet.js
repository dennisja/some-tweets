import React from 'react';
import { TweetFooter, TweetTime, SeeOnTweeterLink } from './styled';
import { timeAgo, findAndReplaceUrl } from './utils';

const Tweet = ({ tweet: { text, created_at, entities } }) => {
  const {
    text: tweetText,
    hasUrl,
    expandedUrl,
    url,
    isTwitterUrl,
  } = findAndReplaceUrl(entities, text);
  return (
    <React.Fragment>
      {tweetText}
      {hasUrl &&
        (isTwitterUrl ? (
          <SeeOnTweeterLink href={url}>See on Tweeter</SeeOnTweeterLink>
        ) : (
          <SeeOnTweeterLink href={expandedUrl}>Visit</SeeOnTweeterLink>
        ))}
      <TweetFooter>
        <TweetTime>{timeAgo(created_at)}</TweetTime>
      </TweetFooter>
    </React.Fragment>
  );
};

export default Tweet;
