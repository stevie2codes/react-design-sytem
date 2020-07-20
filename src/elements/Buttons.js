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
  padding: 10px 25px;
  background-image: linear-gradient(to top, #d8d9db 0%, #fff 80%, #fdfdfd 100%);
  border: 1px solid #8f9092;
  border-radius: 30px;
  box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
    0 -6px 4px #fefefe, inset 0 0 3px 0 #cecfd1;
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
