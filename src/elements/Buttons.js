import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { Colors, Elevation } from "../utilities";
import { motion } from "framer-motion";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 0.8rem;
    padding: 3px 10px;
  `,
  cancel: ({ theme }) => `
  background: ${theme.colors.primary}
  `
};

export const Button = styled(motion.button)`
  padding: 5px 15px;
  background-color: white;
  border: 1px solid ${Colors.purple};
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  margin: 10px;
  font-size: 1rem;
  transition: 0.3s all ease-in-out;

  &:hover {
    ${Elevation[2]};
    background: ${Colors.purple};
    color: ${Colors.white};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

// export const CancelButton = styled(Button)`
//   background: tomato;
// `;
