import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./layouts/Header";
import GlobalStyle from "./Global";
import MenuIcon from "./elements/MenuIcon";
import { Nav } from "./components/Nav";

import Switch from "./elements/Switch";
import { darkTheme, lightTheme } from "./utilities";
import PageTurner from "./images/PageTurner";

function App() {
  const [isNav, setIsNav] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
      <PageTurner
        fillColor={
          isDarkMode ? lightTheme.colors.primary : darkTheme.colors.primary
        }
        style={{
          backgroundSize: "cover",
          position: "fixed",
          height: "100vh"
        }}
      />
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
      </div>
    </ThemeProvider>
  );
}

export default App;
