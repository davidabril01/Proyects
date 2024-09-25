import React from 'react';
import ThemeButton from './ThemeButton';
import ThemeProvider from './ThemeProvider';
import ComponentePrincipal from './ComponentePrincipal';

function App() {
  return (
    <ThemeProvider>
      <ThemeButton />
      <ComponentePrincipal />
    </ThemeProvider>
  );
}

export default App;
