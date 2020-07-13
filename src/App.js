import React from "react";
import Header from "./layouts/Header";
import GlobalStyle from "./Global";

import { Button } from "./elements/Buttons";
function App() {
  return (
    <div>
      <Header />
      <Button>Hello</Button>
      <Button type="cancel"> Cancel me</Button>
      <GlobalStyle />
    </div>
  );
}

export default App;
