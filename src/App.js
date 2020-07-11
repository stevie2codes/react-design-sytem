import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";

import GlobalStyle from "./Global";
import { Heading, Button, CancelButton } from "./elements";

const AppWrapper = styled.div`
  header {
    background: teal;
  }
`;

const Fake = ({ className }) => (
  <div className={className}>
    <h3>FakeComponent here</h3>
  </div>
);
const DoubleFake = styled(Fake)`
  h3 {
    color: purple;
  }
`;

function App() {
  return (
    <AppWrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading>
          Edit <code>src/App.js</code> and save to reload.
        </Heading>
        <Fake />
        <DoubleFake />
        <CancelButton top="200" type="cancel">
          Cancel
        </CancelButton>
        <Button type="save">Save</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;
