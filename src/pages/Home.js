import React, { useState } from "react";
import Modal from "../elements/Modal";
import { Button } from "../elements/Buttons";
import Cards from "../elements/Cards";

const Home = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div>
      <h1>HOME</h1>
      <Button onClick={() => setIsToggle(true)}>Show Modal</Button>
      <Modal isToggle={isToggle} setIsToggle={setIsToggle}>
        <Cards />
      </Modal>
    </div>
  );
};

export default Home;
