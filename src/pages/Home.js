import React from "react";
import styled from "styled-components";

import { PrimaryFont } from "../utilities/Type";
const Home = () => {
  return (
    <main>
      <HomeWrapper>
        <MainText>Design</MainText>
        <MainText>React</MainText>
      </HomeWrapper>
    </main>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainText = styled.h1`
  font-size: 96px;
  ${PrimaryFont};
  color: ${props => props.theme.colors.buttonText};
  font-weight: 300;
  letter-spacing: 5px;
  padding: 0;
  margin: 0;
`;

export default Home;
