import { useState, useEffect } from 'react';
import { THEME_NAMES, THEMES } from './configs';

function useTheme(initialThemeName = THEME_NAMES.default) {
  const { 0: activeThemeName, 1: setActiveThemeName } = useState(
    initialThemeName,
  );
  const theme = THEMES[activeThemeName];

  function setTheme(themeName) {
    setActiveThemeName(themeName);
  }

  return {
    theme,
    setTheme,
    activeThemeName,
  };
}

export default useTheme;
