import styled from "styled-components";
import { Button } from "./Buttons";

import { Elevation, PrimaryFont, Colors } from "../utilities";

import React from "react";

const Cards = ({ title, graphic }) => {
  return (
    <CardContainer>
      <SignupCard>
        <CardTitle className="cardTitle">{title}</CardTitle>
        <CardGraphic src={graphic} alt="Card Graphic" />
        <Input type="text" name="" id="userNameInput" placeholder="Username" />
        <Input
          type="password"
          name=""
          id="passwordInput"
          placeholder="password"
        />
        <CardButton>Sign Up</CardButton>
      </SignupCard>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 20px;
`;

export const SignupCard = styled.div`
  border-radius: 6px;
  ${Elevation[2]};
  padding: 20px;
  width: 380px;
  max-width: 100%;
  height: 60vh;
  margin: auto;
  position: relative;
  z-index: -1;
`;
const CardButton = styled(Button)`
  position: absolute;
  bottom: 60px;
  right: 50%;
  transform: translate(50%);
`;
const CardTitle = styled.h2`
  ${PrimaryFont}
  color:${Colors.purple}
 
`;

const CardGraphic = styled.img`
  position: absolute;
  bottom: 10%;
  right: 10%;
  width: 80%;
  height: 80%;
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid ${Colors.purple};
  padding: 10px;
  display: flex;
  align-items: center;
  bottom: 0;
  margin-top: 10%;
  width: 50%;
  background-color: transparent;
  &:focus {
    outline: 1px solid ${Colors.purple};
  }
`;
export default Cards;
