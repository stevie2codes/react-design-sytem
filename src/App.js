import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./layouts/Header";
import GlobalStyle from "./Global";
import MenuIcon from "./elements/MenuIcon";
import { Nav } from "./components/Nav";

import Switch from "./elements/Switch";
import { Colors } from "./utilities";

const theme = {
  colors: {
    primary: `${Colors.white}`,
    secondary: "#DBDE61",
    shadow: `  0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
    0 -6px 4px #fefefe, inset 0 0 3px 0 #cecfd1`
  }
};
const theme2 = {
  colors: {
    primary: "#212121",
    secondary: "#DBDE61",
    shadow: `0 4px 3px 1px rgba(0,0,0,0.5), 0 6px 8px rgba(0,0,0,0.5), 0 -4px 4px rgba(0,0,0,0.5),
    0 -6px 4px #212121, inset 0 0 3px 0 #430099`
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

        <Switch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>
    </ThemeProvider>
  );
}

export default App;
