import { useState, useEffect } from 'react';
import { THEME_NAMES, THEMES, ACTIVE_THEME_KEY } from './configs';
import { addItemToLocalStorage, getItemFromLocalStorage } from './utils';

function useTheme(initialThemeName = THEME_NAMES.default) {
  const { 0: activeThemeName, 1: setActiveThemeName } = useState(
    initialThemeName,
  );
  const theme = THEMES[activeThemeName];

  function setTheme(themeName) {
    setActiveThemeName(themeName);
    // persist active theme to localStorage
    addItemToLocalStorage(ACTIVE_THEME_KEY, themeName);
  }

  useEffect(() => {
    // read theme from local storage
    const activeTheme = getItemFromLocalStorage(ACTIVE_THEME_KEY);
    if (activeTheme) {
      setActiveThemeName(activeTheme);
    }
  }, []);

  return {
    theme,
    setTheme,
    activeThemeName,
  };
}

export default useTheme;
