import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11Y } from "@storybook/addon-a11y";

addParameters({
  backgrounds: [
    { name: "Light Theme", value: "#F6F6F6", default: true },
    { name: "Dark Theme", value: "#151515" }
  ]
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11Y);
