import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from 'react-testing-library';

import App from '../App';
describe('App component', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
