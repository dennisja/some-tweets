import React from 'react';
import { FaTwitter, FaRetweet } from 'react-icons/fa';

import {
  TweetFooterWrapper,
  TweetTime,
  SeeOnTweeterLink,
  StyledIcon,
  FooterLink,
  StyledImage,
} from '../styled';
import { timeAgo, findAndReplaceUrl, getAPhotoFromEntities } from '../utils';
import IconProvider from './IconProvider';
import { TWEET_BASE_URL } from '../configs';



export const TweetFooter = ({ created_at, retweet_count, linkToTweet }) => (
  <TweetFooterWrapper>
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
  </TweetFooterWrapper>
);
const Tweet = ({
  tweet: {
    id_str,
    text,
    created_at,
    entities,
    retweet_count,
    extended_entities,
    retweeted_status,
  },
}) => {
  const {
    text: tweetText,
    hasUrl,
    expandedUrl,
    url,
    isTwitterUrl,
  } = findAndReplaceUrl(entities, text);

  const linkToTweet = `${TWEET_BASE_URL}${id_str}`;
  const { hasPhoto, photoUrl } = getAPhotoFromEntities({
    extended_entities,
    retweeted_status,
  });

  return (
    <React.Fragment>
      {tweetText}
      {hasPhoto && <StyledImage src={photoUrl} alt="" />}
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
      <TweetFooter
        created_at={created_at}
        retweet_count={retweet_count}
        linkToTweet={linkToTweet}
      />
    </React.Fragment>
  );
};

export default Tweet;
