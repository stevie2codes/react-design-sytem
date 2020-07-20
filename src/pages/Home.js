import React, { useState } from "react";
import Modal from "../elements/Modal";
import { Button } from "../elements/Buttons";
import Cards from "../elements/Cards";
import signin from "../images/signup.svg";
const Home = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div>
      <h1>HOME</h1>
      <Button onClick={() => setIsToggle(true)}>Show Modal</Button>
      <Modal isToggle={isToggle} setIsToggle={setIsToggle}>
        <Cards title="SignIn" graphic={signin} />
      </Modal>
    </div>
  );
};

export default Home;
