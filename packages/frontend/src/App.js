import React from 'react';
import { FaCog } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';

import Tweets from './components/Tweets';
import { FAB } from './styled';
import { TweetsSortContext, SetThemeContext } from './context';
import EditLayoutModal from './components/EditLayout';
import useModalState from './hooks/useModalState';
import useTheme from './hooks/useTheme';
import useTweetsResponse from './hooks/useTweetsResponse';

function App() {
  const { tweets, loading, error, setTweets } = useTweetsResponse();
  const { closeModal, openModal, modalIsOpen } = useModalState();
  let { theme, setTheme } = useTheme();

  if (loading) {
    return <div>loading..</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <SetThemeContext.Provider value={{ setTheme }}>
        <TweetsSortContext.Provider value={{ setTweets }}>
          <Tweets tweets={tweets} />
          <FAB aria-label="Edit Layout" id="edit-layout" onClick={openModal}>
            <FaCog />
          </FAB>
          <EditLayoutModal isOpen={modalIsOpen} closeModal={closeModal} />
        </TweetsSortContext.Provider>
      </SetThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
