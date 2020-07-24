import React, { useState } from "react";
import signup from "../images/signup.svg";
import signin from "../images/signin.svg";
import Cards from "../elements/Cards";
import Modal from "../components/Modal";
import { PrimaryButton } from "../components/Buttons";

import { TextInput } from "../elements/TextInput";

const About = ({ title, graphic }) => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div>
      <h1>Cards</h1>
      <main>
        <Modal isToggle={isToggle} setIsToggle={setIsToggle}></Modal>
        <PrimaryButton onClick={() => setIsToggle(true)}>
          ShowModal
        </PrimaryButton>
        <Cards title="SignUp" graphic={signin} buttonText={"Sign Up"}>
          <Cards.Button>SignUp</Cards.Button>
        </Cards>
        <Cards title="Sign In" graphic={signup} buttonText={"Sign In"}>
          <TextInput type={"text"} placeholder={"Sign In"} />
          <TextInput type={"password"} placeholder={"Password"} />
          <Cards.Button modifiers="small">Sign In</Cards.Button>
        </Cards>
      </main>
    </div>
  );
};
export default About;
