import React from 'react';
import { render } from 'react-testing-library';
import EditLayoutModal from '../components/EditLayout';
import { THEME_NAMES } from '../configs';

describe('Edit Layout Component', () => {
  it('should render the buttons', () => {
    const { getByLabelText } = render(<EditLayoutModal isOpen />);
    const themes = Object.keys(THEME_NAMES);

    const buttons = themes.map((themeName) => {
      const button = getByLabelText(`Change To ${themeName} Theme`);
      expect(button.nodeName).toBe('BUTTON');
      button.click();
    });
    expect(buttons.length).toBe(5);
  });
});
