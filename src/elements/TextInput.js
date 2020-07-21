import React from "react";
import styled from "styled-components";

import { Colors } from "../utilities/Colors";

export const TextInput = ({ type, placeholder }) => {
  return <Input type={type} placeholder={placeholder} />;
};
const Input = styled.input`
  border: 0;
  border-bottom: 1px solid ${Colors.purple};
  padding: 10px;
  display: flex;
  align-items: center;
  bottom: 0;
  margin-top: 10%;
  width: 60%;
  background-color: transparent;
  &:focus {
    outline: 1px solid ${Colors.purple};
  }
`;
