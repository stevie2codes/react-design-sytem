import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { PrimaryFont } from "./utilities/Type";

import { Colors } from "./utilities/Colors";

const GlobalStyle = createGlobalStyle`
${normalize()};
:root{
  font-size:18px;
}
html{
    box-sizing: border-box;
}
*, *:before,*:after{
    box-sizing: inherit;
}
body {
  margin: 0;
  padding:85px 0 0 ;
  font-family: ${PrimaryFont};
  background:${props => props.theme.colors.primary};
}

main{
    width: 90%;
    margin: 50px auto;
}

span{
  color:${Colors.darkGrey};
  width:100%;
  height:50%;
  position:absolute;
  font-size:1.2rem;
  &:hover{
    color:${Colors.white};
      }
}

`;

export default GlobalStyle;
