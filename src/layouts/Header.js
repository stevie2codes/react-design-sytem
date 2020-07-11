import React from "react";
import styled from "styled-components";
import logo from "../logo.svg";
import { Colors, Social, Elevation } from "../utilities";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <img src={logo} alt="logo" className="logo" />
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

const StyledHeader = styled(Header)`
  background-color: ${Colors.purple};
  padding: 10px 5%;
  display: flex;
  justify-content: space-between;
  height: 3rem;
  align-items: center;
  ${Elevation[2]};
  .logo {
    width: 60px;
  }
  .nav a {
    color: white;
    margin: 10px;
    text-decoration: none;
  }
`;

export default StyledHeader;
