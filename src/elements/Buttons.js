import styled from "styled-components";
import { lighten } from "polished";
import { Colors, Elevation } from "../utilities";

export const Button = styled.button`
  background-color: transparent;
  padding: 5px 15px;
  border-radius: 6px;
  ${Elevation[1]};
  border: 1px solid ${Colors.purple};
  color: ${Colors.black};
  font-size: 2rem;
  margin: 10px;
  transition: 0.3s ease;
  &:hover {
    ${Elevation[2]};
    background-color: ${Colors.purple};
    color: white;
    transform: scale(1.02);
  }

  ${({ type }) => {
    if (type === "cancel") {
      return `
      background-color: tomato;
      &:hover{
        background: ${lighten(0.2, "tomato")};
      `;
    }
  }}
`;

// export const CancelButton = styled(Button)`
//   background: tomato;
// `;
