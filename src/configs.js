const LOCAL_API_URL = 'http://localhost:4004/';
const TWEETS_URL = 'tweets';
const TWEET_BASE_URL = 'https://twitter.com/i/web/status/';

const THEME_NAMES = {
  black: 'black',
  default: 'default',
  blue: 'blue',
  purple: 'purple',
  red: 'red',
};

const THEMES = {
  default: {
    tweetText: 'black',
    tweetBGColor: 'white',
    primaryColor: 'green',
    secondaryColor: 'white',
    bodyBGColor: 'rgba(0, 0, 0, 0.6)',
    tweetTimeColor: 'rgba(0, 0, 0, 0.6)',
    linksColor: 'green',
    footerLinkColor: 'rgba(0, 0, 0, 0.6)',
    footerLinkColorOnHover: '#1da1f2',
  },

  black: {
    tweetText: '#FF3D00',
    tweetBGColor: 'black',
    primaryColor: '#FF3D00',
    secondaryColor: 'black',
    bodyBGColor: 'rgba(0, 0, 0, 0.6)',
    tweetTimeColor: '#FFFF00',
    linksColor: '#B2EBF2',
    footerLinkColor: '#B2EBF2',
    footerLinkColorOnHover: '#1da1f2',
  },

  blue: {
    tweetText: 'black',
    tweetBGColor: 'white',
    primaryColor: 'blue',
    secondaryColor: 'white',
    bodyBGColor: 'rgba(0, 0, 0, 0.6)',
    tweetTimeColor: 'rgba(0, 0, 0, 0.6)',
    linksColor: 'blue',
    footerLinkColor: 'rgba(0, 0, 0, 0.6)',
    footerLinkColorOnHover: '#1da1f2',
  },
  red: {
    tweetText: 'black',
    tweetBGColor: 'white',
    primaryColor: 'red',
    secondaryColor: 'white',
    bodyBGColor: 'rgba(0, 0, 0, 0.6)',
    tweetTimeColor: 'rgba(0, 0, 0, 0.6)',
    linksColor: 'blue',
    footerLinkColor: 'rgba(0, 0, 0, 0.6)',
    footerLinkColorOnHover: '#1da1f2',
  },
  purple: {
    tweetText: 'black',
    tweetBGColor: 'white',
    primaryColor: 'purple',
    secondaryColor: 'white',
    bodyBGColor: 'rgba(0, 0, 0, 0.6)',
    tweetTimeColor: 'rgba(0, 0, 0, 0.6)',
    linksColor: 'blue',
    footerLinkColor: 'rgba(0, 0, 0, 0.6)',
    footerLinkColorOnHover: '#1da1f2',
  },
};

export { LOCAL_API_URL, TWEETS_URL, TWEET_BASE_URL, THEMES, THEME_NAMES };
