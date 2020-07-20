import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Colors, Elevation, Gradients } from "../utilities";
import { fixed } from "../utilities/Position";

const Switch = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <ModeSwitch
      variants={switchVariants}
      animate={isDarkMode ? "light" : "dark"}
    >
      <Indicator
        onClick={() => setIsDarkMode(!isDarkMode)}
        variants={variants}
        animate={isDarkMode ? "light" : "dark"}
      />
    </ModeSwitch>
  );
};

const ModeSwitch = styled(motion.div)`
  width: 100px;
  height: 50px;
  background-color: ${Colors.white};
  box-shadow: ${props => props.theme.colors.shadow};
  border: 1px solid #8f9092;
  border-radius: 25px;
  display: flex;
  ${fixed({ x: "10px", y: "100px" })};
  align-items: center;
  padding: 25px 3px;
`;

const Indicator = styled(motion.div)`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  ${Elevation[2]};
  background-image: ${Gradients.whiteGradient};
  padding: 2px;
`;

const variants = {
  light: { x: 0 },
  dark: { x: "100%" }
};
const switchVariants = {
  light: { background: `${Colors.white}` },
  dark: { background: `${Colors.purple}` }
};

export default Switch;
