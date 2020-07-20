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
      <main>
        <Button onClick={() => setIsToggle(true)}>
          <span>Show Modal</span>
        </Button>
        <Modal isToggle={isToggle} setIsToggle={setIsToggle}>
          <Cards title="SignIn" graphic={signin} />
        </Modal>
      </main>
    </div>
  );
};

export default Home;
