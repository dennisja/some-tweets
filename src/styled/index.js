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
  padding: 5px;
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

const TweetFooterWrapper = styled.div`
  border-top: 1px solid rgba(238, 238, 238, 0.9);
  width: 100%;
  margin-top: 5px;
  padding: 5px;
  text-align: center;
`;

const SeeOnTweeterLink = styled.a`
  color: green;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledIcon = styled.div`
  display: inline-block;
  font-size: 100%;
  color: green;
  margin: 0 10px;
`;

const FooterLink = styled(SeeOnTweeterLink)`
  color: rgba(0, 0, 0, 0.6),

 &:hover {
    color: #1da1f2;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const FAB = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  color: white;
  background-color: green;
  text-align: center;
  z-index: 10;
`;

export {
  TweetsColumn,
  TweetsContainer,
  TweetsColumnHeader,
  TweetsColumnHeading,
  TweetsListWrapper,
  TweetListItemWrapper,
  TweetTime,
  TweetFooterWrapper,
  SeeOnTweeterLink,
  StyledIcon,
  FooterLink,
  StyledImage,
  FAB,
};
