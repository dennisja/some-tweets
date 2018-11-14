import React from 'react';
import { IconContext } from 'react-icons';

export default ({ children }) => (
  <IconContext.Provider value={{ style: { verticalAlign: 'text-bottom' } }}>
    {children}
  </IconContext.Provider>
);
