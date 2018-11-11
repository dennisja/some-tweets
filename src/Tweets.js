import React from 'react';

import {
  TweetsColumn,
  TweetsContainer,
  TweetListItem,
  TweetsListWrapper,
  TweetsColumnHeader,
  TweetsColumnHeading,
} from './styled';

const Heading = (props) => (
  <TweetsColumnHeader>
    <TweetsColumnHeading>{props.children}</TweetsColumnHeading>
  </TweetsColumnHeader>
);

const TweetList = ({ tweetList }) => (
  <TweetsListWrapper>
    {tweetList.map((tweet) => (
      <TweetListItem key={tweet.id}>{tweet.text}</TweetListItem>
    ))}
  </TweetsListWrapper>
);

function Tweets({ tweets }) {
  const { makeschool, newsycombinator, ycombinator } = tweets;
  return (
    <TweetsContainer>
      <TweetsColumn>
        <Heading>@makeschool Tweets</Heading>
        <TweetList tweetList={makeschool} />
      </TweetsColumn>
      <TweetsColumn gridArea="two">
        <Heading>@ycombinator Tweets</Heading>
        <TweetList tweetList={ycombinator} />
      </TweetsColumn>
      <TweetsColumn gridArea="three">
        <Heading>@newsycombinator Tweets</Heading>
        <TweetList tweetList={newsycombinator} />
      </TweetsColumn>
    </TweetsContainer>
  );
}

export default Tweets;
