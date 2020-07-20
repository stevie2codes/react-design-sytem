import styled from "styled-components";
import { Button } from "./Buttons";

import { Elevation, PrimaryFont, Colors } from "../utilities";

import React from "react";

const Cards = ({ title, graphic }) => {
  return (
    <div>
      <CardContainer>
        <CardTitle className="cardTitle">{title}</CardTitle>
        <CardGraphic src={graphic} alt="Card Graphic" />
        <Input type="text" name="" id="userNameInput" placeholder="Username" />
        <Input
          type="password"
          name=""
          id="passwordInput"
          placeholder="password"
        />
        <Button>Sign Up</Button>
      </CardContainer>
    </div>
  );
};

export const CardContainer = styled.div`
  border-radius: 6px;
  ${Elevation[2]};
  padding: 10px;
  width: 80vmax;
  width: 100%;
  height: 60vh;
  margin: auto;
  position: relative;
`;

const CardTitle = styled.h2`
  ${PrimaryFont}
  color:${Colors.purple}
 
`;

const CardGraphic = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 50%;
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
