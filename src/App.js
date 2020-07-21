import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./layouts/Header";
import GlobalStyle from "./Global";
import MenuIcon from "./elements/MenuIcon";
import { Nav } from "./components/Nav";

import Switch from "./elements/Switch";
import { Colors, PrimaryFont } from "./utilities";

const theme = {
  colors: {
    primary: "#212121",
    secondary: "#DBDE61",
    shadow: `0 4px 8px 1px rgba(0,0,0,0.2), 0 6px 16px rgba(0,0,0,0.2), 0 -4px 4px rgba(0,0,0,0.2),
    0 -6px 4px #212121, inset 0 0 3px 0 #430099`
  }
};
const theme2 = {
  colors: {
    primary: `${Colors.white}`,
    secondary: "#DBDE61",
    fontFamily: ` ${PrimaryFont}`,
    shadow: `  0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
    0 -6px 4px #fefefe, inset 0 0 3px 0 #cecfd1`
  }
};

function App() {
  const [isNav, setIsNav] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <ThemeProvider theme={isDarkMode ? theme2 : theme}>
      <div>
        <Header />
        <MenuIcon onClick={() => setIsNav(true)} />
        <Nav isNav={isNav} setIsNav={setIsNav} />
        <GlobalStyle />

        <Switch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>
    </ThemeProvider>
  );
}

export default App;
