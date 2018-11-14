import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';

import Tweets from './Tweets';
import { FAB } from './styled';
import useTweetsResponse from './useTweetsResponse';
import { TweetsSortContext, SetThemeContext } from './context';
import EditLayoutModal from './EditLayout';
import useModalState from './useModalState';
import useTheme from './useTheme';

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
            <FaPencilAlt />
          </FAB>
          <EditLayoutModal isOpen={modalIsOpen} closeModal={closeModal} />
        </TweetsSortContext.Provider>
      </SetThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
