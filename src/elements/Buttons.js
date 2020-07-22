import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { Colors, Elevation, PrimaryFont } from "../utilities";
import { motion } from "framer-motion";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 0.8rem;
    width:8.82rem;
  `
};

export const Button = styled(motion.button)`
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 17.625rem;
  height: 3rem;
  margin-top: 3rem;
  font-family: ${PrimaryFont};
  font-weight: 500;
  cursor: pointer;
  border: none;
  max-width: none;
  position: relative;
  background: transparent;
  text-decoration: none;
  overflow: visible;
  color: ${props => props.theme.colors.buttonText};
  z-index: 50;
  max-width: 100%;
  &:hover {
    color: ${Colors.white};
  }

  &::before {
    content: "";
    top: 0;
    position: absolute;
    width: 17.625rem;
    height: 1.5rem;
    max-width: 100%;
    z-index: -1;
    left: 0;
    border: 1.5px solid #430099;
    background: ${props => props.theme.colors.button};
    transform: translateZ(0);
    border-bottom: none;
    transition: background 0.2s ease;
    transform: perspective(0.4375rem) rotateX(0.5deg);
  }

  &::after {
    content: "";
    top: 1.5rem;
    position: absolute;
    width: 17.625rem;
    height: 1.5rem;
    max-width: 100%;
    z-index: -1;
    left: 0;
    border: 1.5px solid #430099;
    background: ${props => props.theme.colors.button};
    border-top: none;
    transform: translateZ(0);
    transition: background 0.2s ease;
    transform: perspective(0.4375rem) rotateX(-0.5deg);
  }

  &:hover:before {
    ${Elevation[2]};
    border: none;
    background: ${Colors.purple};
    transition: 0.2s ease-in-out all;
  }
  &:hover:after {
    ${Elevation[2]};
    border: none;
    background: ${Colors.purple};
    transition: 0.2s ease-in-out all;
  }
  &:focus {
    outline: none;
    ${Elevation[0]}
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
