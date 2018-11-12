import styled from 'styled-components';

const TweetsContainer = styled.main`
  display: grid;
  grid-template-areas: 'one two three';
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  width: 100vw;
  height: 100vh;
`;

const TweetsColumn = styled.section`
  grid-area: ${(props) => props.gridArea || 'one'};
`;

const TweetsColumnHeader = styled.header`
  background: green;
  text-align: center;
`;

const TweetsColumnHeading = styled.h2`
  color: white;
`;

const TweetsListWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
`;

const TweetListItemWrapper = styled.li`
  list-style-type: none;
  padding: 20px;
  display: block;
  border: 1px solid #eee;
  box-shadow: 1px 1px 1px 1px #eee;
  background-color: white;
`;

const TweetTime = styled.span`
  color: rgba(0, 0, 0, 0.6);
`;

const TweetFooter = styled.div`
  border-top: 1px solid rgba(238, 238, 238, 0.9);
  width: 100%;
  margin-top: 5px;
  padding: 5px;
`;

const SeeOnTweeterLink = styled.a`
  color: green;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  TweetsColumn,
  TweetsContainer,
  TweetsColumnHeader,
  TweetsColumnHeading,
  TweetsListWrapper,
  TweetListItemWrapper,
  TweetTime,
  TweetFooter,
  SeeOnTweeterLink,
};
