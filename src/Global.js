import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

import { Colors } from "./utilities/Colors";

const GlobalStyle = createGlobalStyle`
${normalize()};
html{
    box-sizing: border-box;
}
*, *:before,*:after{
    box-sizing: inherit;
}
body {
  margin: 0;
  padding:85px 0 0 ;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
