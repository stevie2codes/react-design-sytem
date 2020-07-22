import React from "react";

import styled from "styled-components";

const CloseIcon = ({ onClick, strokeColor }) => {
  return (
    <div role="button">
      <Close onClick={onClick} viewBox="0 0 38 38" fill="none">
        <path
          d="M33.25 19C33.25 11.1328 26.8672 4.75 19 4.75C11.1328 4.75 4.75 11.1328 4.75 19C4.75 26.8672 11.1328 33.25 19 33.25C26.8672 33.25 33.25 26.8672 33.25 19Z"
          stroke={strokeColor}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M23.75 23.75L14.25 14.25"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.25 23.75L23.75 14.25"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Close>
    </div>
  );
};

const Close = styled.svg`
  width: 100%;
  height: 100%;
`;

export default CloseIcon;
