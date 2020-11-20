import React, { useState, useContext } from 'react'

import ThemeContext from '../context/ThemeContext'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  const {theme, setTheme} = useContext(ThemeContext)
  const handleClick = () => {
    setDarkMode(!darkMode)
    theme === 'tm-light' ? setTheme('tm-dark') : setTheme('tm-light')
  }
  return (
    <div className='Header'>
      <h1>ReactHooks</h1>
      <button type='button' onClick={handleClick}>{darkMode ? 'Dark' : 'Light'} mode</button>
    </div>
  );
}

export default Header;
