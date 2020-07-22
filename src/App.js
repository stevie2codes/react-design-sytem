import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./layouts/Header";
import GlobalStyle from "./Global";
import MenuIcon from "./elements/MenuIcon";
import { Nav } from "./components/Nav";
import Switch from "./elements/Switch";
import { darkTheme, lightTheme } from "./utilities";

import { ParticleBackground } from "./elements/ParticleBackground";

function App() {
  const [isNav, setIsNav] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
      <div>
        <Header />
        <MenuIcon
          onClick={() => setIsNav(true)}
          strokeColor={
            isDarkMode ? darkTheme.colors.primary : lightTheme.colors.primary
          }
        />
        <Nav isNav={isNav} setIsNav={setIsNav} />
        <GlobalStyle />
        <Switch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <ParticleBackground
          style={{ position: "fixed", top: 0, zIndex: "-1" }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
