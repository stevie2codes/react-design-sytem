import { css } from "styled-components";

// CSS Helper function
// Needed for props and mixins

export const fixedTop = css`
  position: fixed;
  top: ${({ top }) => top + "px"};
  left: 0;
`;
