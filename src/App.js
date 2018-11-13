import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';

import Tweets from './Tweets';
import { FAB } from './styled';
import useTweetsResponse from './useTweetsResponse';
import { TweetsSortContext } from './context';
import EditLayoutModal from './EditLayout';
import useModalState from './useModalState';

function App() {
  const { tweets, loading, error, setTweets } = useTweetsResponse();
  const { closeModal, openModal, modalIsOpen } = useModalState();

  if (loading) {
    return <div>loading..</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <TweetsSortContext.Provider value={{ setTweets }}>
      <Tweets tweets={tweets} />
      <FAB aria-label="Edit Layout" id="edit-layout" onClick={openModal}>
        <FaPencilAlt />
      </FAB>
      <EditLayoutModal isOpen={modalIsOpen} closeModal={closeModal} />
    </TweetsSortContext.Provider>
  );
}

export default App;
