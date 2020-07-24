import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  colorPrimary: "#430099",
  colorSecondary: "deepskyblue",

  // UI
  appBg: "#212121",
  appContentBg: "silver",
  appBorderColor: "#4c4c4c",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Avenir", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "white",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "silver",
  barSelectedColor: "white",
  barBg: "#430099",

  // Form colors
  inputBg: "black",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "My custom storybook",
  brandUrl: "https://example.com",
  brandImage: "https://placehold.it/350x150"
});
