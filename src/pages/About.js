import React from "react";
import signup from "../images/signup.svg";
import signin from "../images/signin.svg";
import Cards from "../elements/Cards";
const About = ({ title, graphic }) => {
  return (
    <div>
      <h1>ABOUT</h1>
      <main>
        <Cards title="Sign Up" graphic={signup} />
        <Cards title="Signin" graphic={signin} />
      </main>
    </div>
  );
};
export default About;
