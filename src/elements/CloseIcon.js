import React from "react";
import { motion } from "framer-motion";

import styled from "styled-components";

const CloseIcon = ({ onClick }) => {
  return (
    <Close
      onClick={onClick}
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.25 19C33.25 11.1328 26.8672 4.75 19 4.75C11.1328 4.75 4.75 11.1328 4.75 19C4.75 26.8672 11.1328 33.25 19 33.25C26.8672 33.25 33.25 26.8672 33.25 19Z"
        stroke="#fff"
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <path
        d="M23.75 23.75L14.25 14.25"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.25 23.75L23.75 14.25"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Close>
  );
};
export default CloseIcon;

const Close = styled(motion.svg)`
  position: absolute;
  top: 10px;
  right: 10px;
`;
