import { Colors, PrimaryFont } from "../utilities";

export const darkTheme = {
  colors: {
    primary: "#151515",
    cardColor: ` #212121`,
    button: `${Colors.purple}`,
    buttonText: `${Colors.white}`,
    secondary: "#DBDE61",
    shadow: `0 4px 8px 1px rgba(0,0,0,0.2), 0 6px 16px rgba(0,0,0,0.2), 0 -4px 4px rgba(0,0,0,0.2),
      0 -6px 4px #212121, inset 0 0 3px 0 #430099`
  }
};
export const lightTheme = {
  colors: {
    primary: `${Colors.white}`,
    secondary: "#DBDE61",
    button: `${Colors.white}`,
    buttonText: `${Colors.darkGrey}`,
    cardColor: `${Colors.white}`,
    fontFamily: ` ${PrimaryFont}`,
    shadow: `  0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
      0 -6px 4px #fefefe, inset 0 0 3px 0 #cecfd1`
  }
};
