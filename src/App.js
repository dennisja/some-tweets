import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';

import Tweets from './Tweets';
import { FAB } from './styled';
import useTweetsResponse from './useTweetsResponse';

function App() {
  const { tweets, loading, error } = useTweetsResponse();

  if (loading) {
    return <div>loading..</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <React.Fragment>
      <Tweets tweets={tweets} />
      <FAB aria-label="Edit Layout" id="edit-layout">
        <FaPencilAlt />
      </FAB>
    </React.Fragment>
  );
}

export default App;
