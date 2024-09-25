import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import "./ThemeButton.scss"


function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    const buttonClass = theme === 'light' ? 'ThemeButton light' : 'ThemeButton';

    return (
        <button className={buttonClass} onClick={toggleTheme}>
      </button>
    );
  }
export default ThemeButton;