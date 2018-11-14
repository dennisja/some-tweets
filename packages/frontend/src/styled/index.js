import styled from 'styled-components';

const applyPrimaryColor = (props) => props.theme.primaryColor;
const applySecondaryColor = (props) => props.theme.secondaryColor;
const applyTweetBGColor = (props) => props.theme.tweetBGColor;
const applyTweetTextColor = (props) => props.theme.tweetText;
const applyTweetTimeColor = (props) => props.theme.tweetTimeColor;
const applyLinksColor = (props) => props.theme.linksColor;

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
  background: ${applyPrimaryColor};
  text-align: center;
  padding: 5px;
`;

const TweetsColumnHeading = styled.h2`
  color: ${applySecondaryColor};
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
  background-color: ${applyTweetBGColor};
  color: ${applyTweetTextColor};
`;

const TweetTime = styled.span`
  color: ${applyTweetTimeColor};
`;

const TweetFooterWrapper = styled.div`
  border-top: 1px solid rgba(238, 238, 238, 0.9);
  width: 100%;
  margin-top: 5px;
  padding: 5px;
  text-align: center;
`;

const SeeOnTweeterLink = styled.a`
  color: ${applyLinksColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledIcon = styled.div`
  display: inline-block;
  font-size: 100%;
  color: ${applyPrimaryColor};
  margin: 0 10px;
`;

const FooterLink = styled(SeeOnTweeterLink)`
  color: ${(props) => props.footerLinkColor};

  &:hover {
    color: ${(props) => props.footerLinkColorOnHover};
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

  color: ${applySecondaryColor};
  background-color: ${applyPrimaryColor};
  text-align: center;
  z-index: 10;
`;

const ColorOptionsHolder = styled.div`
  border: 1px solid #eee;
  box-shadow: 1px 1px 1px 1px #eee;
  background-color: white;
  width: 100%;
  height: 60px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 10px;
  margin-top: 10px;
`;

const ColorOption = styled.button`
  background-color: ${(props) => props.bgColor};
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

ColorOption.defaultProps = {
  bgColor: 'green',
};

const EditLayoutSettingTitle = styled.h3`
  color: ${applyPrimaryColor};
  margin-top: 10px;
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
  ColorOption,
  ColorOptionsHolder,
  EditLayoutSettingTitle,
};
