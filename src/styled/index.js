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
`;

const TweetsColumnHeading = styled.h2`
  color: white;
`;

const TweetsListWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  background-color: rgba(238, 238, 238, 0.9);
`;

const TweetListItem = styled.li`
  list-style-type: none;
  padding: 30px;
  display: block;
  border: 1px solid #eee;
  box-shadow: 1px 1px 1px 1px #eee;
  background-color: white;
`;

export {
  TweetsColumn,
  TweetsContainer,
  TweetsColumnHeader,
  TweetsColumnHeading,
  TweetsListWrapper,
  TweetListItem,
};
