import React from "react";
import signup from "../images/signup.svg";
import Cards from "../elements/Cards";
const About = ({ title, graphic }) => {
  return (
    <div>
      <h1>ABOUT</h1>
      <Cards title="Sign Up" graphic={signup} />
    </div>
  );
};
export default About;
