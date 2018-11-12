import React from 'react';
import { FaTwitter, FaRetweet } from 'react-icons/fa';

import {
  TweetFooter,
  TweetTime,
  SeeOnTweeterLink,
  StyledIcon,
  FooterLink,
} from './styled';
import { timeAgo, findAndReplaceUrl } from './utils';
import IconProvider from './IconProvider';

const tweetBaseURL = 'https://twitter.com/i/web/status/';
const Tweet = ({
  tweet: { id, text, created_at, entities, retweet_count },
}) => {
  const {
    text: tweetText,
    hasUrl,
    expandedUrl,
    url,
    isTwitterUrl,
  } = findAndReplaceUrl(entities, text);
  const linkToTweet = isTwitterUrl ? expandedUrl : `${tweetBaseURL}${id}`;
  return (
    <React.Fragment>
      {tweetText}
      {hasUrl &&
        (isTwitterUrl ? (
          <SeeOnTweeterLink href={url} target="_blank">
            See on Twitter
          </SeeOnTweeterLink>
        ) : (
          <SeeOnTweeterLink href={expandedUrl} target="_blank">
            Read More
          </SeeOnTweeterLink>
        ))}
      <TweetFooter>
        <TweetTime>{timeAgo(created_at)}</TweetTime>
        <StyledIcon title={`${retweet_count} Retweets`}>
          {`${retweet_count} `}
          <IconProvider>
            <FaRetweet />
          </IconProvider>
        </StyledIcon>

        <FooterLink href={linkToTweet} target="_blank">
          <IconProvider>
            <FaTwitter />
          </IconProvider>
        </FooterLink>
      </TweetFooter>
    </React.Fragment>
  );
};

export default Tweet;
