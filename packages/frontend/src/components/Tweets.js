import React, { useContext } from 'react';

import {
  TweetsColumn,
  TweetsContainer,
  TweetListItemWrapper,
  TweetsListWrapper,
  TweetsColumnHeader,
  TweetsColumnHeading,
} from '../styled';
import Tweet from './Tweet';
import { TweetsSortContext } from '../context';

const MAKE_SCHOOL = 'makeschool';
const Y_COMBINATOR = 'ycombinator';
const NEWS_Y_COMBINATOR = 'newsycombinator';

const Heading = ({ children, ...otherProps }) => (
  <TweetsColumnHeader {...otherProps}>
    <TweetsColumnHeading>{children}</TweetsColumnHeading>
  </TweetsColumnHeader>
);

const TweetList = ({ tweetList }) => (
  <TweetsListWrapper>
    {tweetList
      ? tweetList.map((tweet) => (
          <TweetListItemWrapper key={tweet.id}>
            <Tweet tweet={tweet} />
          </TweetListItemWrapper>
        ))
      : "Something Went Wrong. Tweets Couldn't be loaded"}
  </TweetsListWrapper>
);

function Tweets({ tweets }) {
  let { makeschool, newsycombinator, ycombinator } = tweets;
  const { setTweets } = useContext(TweetsSortContext);

  function sortTweets(columnToSort) {
    if (columnToSort === MAKE_SCHOOL) {
      makeschool = [...makeschool].reverse();
    }
    if (columnToSort === Y_COMBINATOR) {
      ycombinator = [...ycombinator].reverse();
    }
    if (columnToSort === NEWS_Y_COMBINATOR) {
      newsycombinator = [...newsycombinator].reverse();
    }
    setTweets({ newsycombinator, ycombinator, makeschool });
  }

  return (
    <TweetsContainer>
      <TweetsColumn>
        <Heading onDoubleClick={() => sortTweets(MAKE_SCHOOL)}>
          @makeschool tweets
        </Heading>
        <TweetList tweetList={makeschool} />
      </TweetsColumn>
      <TweetsColumn gridArea="two">
        <Heading onDoubleClick={() => sortTweets(Y_COMBINATOR)}>
          @ycombinator tweets
        </Heading>
        <TweetList tweetList={ycombinator} />
      </TweetsColumn>
      <TweetsColumn gridArea="three">
        <Heading onDoubleClick={() => sortTweets(NEWS_Y_COMBINATOR)}>
          @newsycombinator tweets
        </Heading>
        <TweetList tweetList={newsycombinator} />
      </TweetsColumn>
    </TweetsContainer>
  );
}

export default Tweets;
