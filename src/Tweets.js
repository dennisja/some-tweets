import React from 'react';

import {
  TweetsColumn,
  TweetsContainer,
  TweetListItemWrapper,
  TweetsListWrapper,
  TweetsColumnHeader,
  TweetsColumnHeading,
} from './styled';
import Tweet from './Tweet';

const Heading = (props) => (
  <TweetsColumnHeader>
    <TweetsColumnHeading>{props.children}</TweetsColumnHeading>
  </TweetsColumnHeader>
);

const TweetList = ({ tweetList }) => (
  <TweetsListWrapper>
    {tweetList.map((tweet) => (
      <TweetListItemWrapper key={tweet.id}>
        <Tweet tweet={tweet} />
      </TweetListItemWrapper>
    ))}
  </TweetsListWrapper>
);

function Tweets({ tweets }) {
  const { makeschool, newsycombinator, ycombinator } = tweets;
  return (
    <TweetsContainer>
      <TweetsColumn>
        <Heading>@makeschool tweets</Heading>
        <TweetList tweetList={makeschool} />
      </TweetsColumn>
      <TweetsColumn gridArea="two">
        <Heading>@ycombinator tweets</Heading>
        <TweetList tweetList={ycombinator} />
      </TweetsColumn>
      <TweetsColumn gridArea="three">
        <Heading>@newsycombinator tweets</Heading>
        <TweetList tweetList={newsycombinator} />
      </TweetsColumn>
    </TweetsContainer>
  );
}

export default Tweets;
