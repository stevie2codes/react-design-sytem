import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./layouts/Header";
import GlobalStyle from "./Global";
import MenuIcon from "./elements/MenuIcon";
import { Nav } from "./components/Nav";

import Switch from "./elements/Switch";
import { Colors, Elevation } from "./utilities";

const theme = {
  colors: {
    primary: `${Colors.white}`,
    secondary: "#DBDE61",
    shadow: `${Elevation[3]}`
  }
};
const theme2 = {
  colors: {
    primary: "#212121",
    secondary: "#DBDE61",
    shadow: `${Elevation[1]}`
  }
};

function App() {
  const [isNav, setIsNav] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeProvider theme={isDarkMode ? theme : theme2}>
      <div>
        <Header />
        <MenuIcon onClick={() => setIsNav(true)} />
        <Nav isNav={isNav} setIsNav={setIsNav} />
        <GlobalStyle />
        <main>
          <Switch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
