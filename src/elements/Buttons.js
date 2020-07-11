import styled from "styled-components";
import { fixedTop } from "../utilities";

export const Button = styled.button`
  background-color: indigo;
  padding: 5px 10px;
  border-radius: 6px;
  border: none;
  color: white;
  font-size: 2rem;
  margin: 10px;
  background: indigo;
`;

export const CancelButton = styled(Button)`
  background: tomato;
  ${fixedTop};
`;
