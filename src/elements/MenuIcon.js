import React from "react";

import styled from "styled-components";
const MenuIcon = ({ onClick }) => {
  return (
    <BurgerMenu role="button" onClick={onClick}>
      <svg
        width="60"
        height="21"
        viewBox="0 0 60 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="1" x2="30" y2="1" stroke="white" strokeWidth="2" />
        <line y1="10" x2="30" y2="10" stroke="white" strokeWidth="2" />
        <line y1="20" x2="30" y2="20" stroke="white" strokeWidth="2" />
      </svg>
    </BurgerMenu>
  );
};

export default MenuIcon;

const BurgerMenu = styled.div`
  position: absolute;
  top: 20px;
  right: 10px;
`;