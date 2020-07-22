import styled from "styled-components";
import { Button } from "./Buttons";
import { Elevation, PrimaryFont, Colors } from "../utilities";
import React from "react";

const Cards = ({ title, graphic, children }) => (
  <CardContainer>
    <Card>
      <CardTitle className="cardTitle">{title}</CardTitle>
      <CardGraphic src={graphic} alt="Card Graphic" />
      {children}
    </Card>
  </CardContainer>
);

const CardContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 20px;
`;

const Card = styled.div`
  border-radius: 6px;
  ${Elevation[1]};
  padding: 20px;
  width: 380px;
  max-width: 100%;
  height: 60vh;
  margin: auto;
  position: relative;
  z-index: 1;
  background-color: ${props => props.theme.colors.cardColor};
`;
const CardButton = styled(Button)`
  position: absolute;
  bottom: 60px;
  right: 50%;
  transform: translate(50%);
  z-index: 100;
`;
const CardTitle = styled.h2`
  ${PrimaryFont}
  color:${Colors.purple}
 
`;

const CardGraphic = styled.img`
  position: absolute;
  margin: 10px;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  width: 60%;
  height: 60%;
`;
Cards.Button = CardButton;
export default Cards;
