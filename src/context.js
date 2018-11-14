import React from 'react';

const TweetsSortContext = React.createContext({ setTweets: () => {} });

const SetThemeContext = React.createContext({ setTheme: () => {} });

export { TweetsSortContext, SetThemeContext };
