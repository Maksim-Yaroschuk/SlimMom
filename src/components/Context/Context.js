import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const body = document.querySelector('body');

export const ThemeContextProvider = ({ children }) => {
  const isClass = body.classList.contains('christmas');
  const [isChristmas, setIsChristmas] = useState(isClass);

  return (
    <ThemeContext.Provider
      value={{
        isChristmas,
        setValue: value => setIsChristmas(value),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
