import React from "react";
import signup from "../images/signup.svg";
import Cards from "../elements/Cards";
const About = ({ title, graphic }) => {
  return (
    <div>
      <h1>ABOUT</h1>
      <div className="main">
        <Cards title="Sign Up" graphic={signup} />
      </div>
    </div>
  );
};
export default About;
