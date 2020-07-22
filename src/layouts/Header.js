import React from "react";
import styled from "styled-components";
import logo from "../logo.svg";
import { fixed } from "../utilities";

const Header = ({ className, theme }) => {
  return (
    <header className={className}>
      <img src={logo} alt="logo" className="logo" />
    </header>
  );
};

const StyledHeader = styled(Header)`
  background-color: transparent;
  padding: 30px 5%;
  display: flex;
  justify-content: space-between;
  height: auto;
  align-items: center;
  ${fixed()};
  width: 100%;
  .logo {
    width: 60px;
  }
`;

export default StyledHeader;
