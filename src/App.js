import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./layouts/Header";
import GlobalStyle from "./Global";
import MenuIcon from "./elements/MenuIcon";
import { Nav } from "./components/Nav";

const theme = {
  colors: {
    primary: "#E54B4B",
    secondary: "#DBDE61"
  }
};

function App() {
  const [isNav, setIsNav] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <MenuIcon onClick={() => setIsNav(true)} />
        <Nav isNav={isNav} setIsNav={setIsNav} />
        <GlobalStyle />
        <main></main>
      </div>
    </ThemeProvider>
  );
}

export default App;
