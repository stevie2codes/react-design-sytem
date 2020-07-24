import React from "react";
import styled from "styled-components";

import { absolute, PrimaryFont, Colors } from "../utilities";
const Home = () => {
  return (
    <main>
      <HomeWrapper>
        <PlantImage
          src={require("../images/purpPlant.jpg")}
          alt="purple plants"
        />
        <MainText>Design</MainText>
        <h1>Design is dicovery</h1>
      </HomeWrapper>
    </main>
  );
};

const HomeWrapper = styled.div`
  ${absolute({ x: "10px", y: "10px" })};
  height: 95vh;
`;

const PlantImage = styled.img`
  width: 40vw;
  height: 98vh;
`;

const MainText = styled.h1`
  font-size: 96px;
  ${PrimaryFont}
  text-align:center;
  color: ${Colors.white};
  ${absolute({ x: "50%", y: "30%" })};
  transform: translate(-50%);
  font-weight: 300;
  letter-spacing: 5px;
`;

export default Home;
