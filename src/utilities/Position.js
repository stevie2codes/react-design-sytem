import { css } from "styled-components";

// CSS Helper function
// Needed for props and mixins

export const fixed = ({ x = 0, y = 0 } = {}) =>
  css`
    position: fixed;
    top: ${y};
    right: ${x};
  `;
export const absolute = ({ x = 0, y = 0 } = {}) =>
  css`
    position: absolute;
    top: ${y};
    left: ${x};
  `;
