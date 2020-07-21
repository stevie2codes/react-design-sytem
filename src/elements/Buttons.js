import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { Colors, Elevation, PrimaryFont } from "../utilities";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 0.8rem;
    padding: 3px 10px;
  `,
  cancel: ({ theme }) => `
  background: ${theme.colors.primary}
  `
};

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 17.625rem;
  height: 3rem;
  margin-top: 3rem;
  font-family: ${PrimaryFont};
  cursor: pointer;
  border: none;
  max-width: none;
  position: relative;
  background: transparent;
  text-align: center;
  text-decoration: none;
  overflow: visible;
  color: #4c4c4c;
  z-index: 50;
  max-width: 100%;

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
    background: #fff;
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
    background: #fff;
    border-top: none;
    transform: translateZ(0);
    transition: background 0.2s ease;
    transform: perspective(0.4375rem) rotateX(-0.5deg);
  }

  &:hover:before {
    ${Elevation[2]};
    border: none;
    background: ${Colors.purple};
    color: ${Colors.white};
    transition: 0.2s ease-in all;
  }
  &:hover:after {
    ${Elevation[2]};
    border: none;
    background: ${Colors.purple};
    color: ${Colors.white};
    transition: 0.2s ease-in all;
  }
  &:focus {
    outline: none;
    ${Elevation[0]}
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

// export const CancelButton = styled(Button)`
//   background: tomato;
// `;
