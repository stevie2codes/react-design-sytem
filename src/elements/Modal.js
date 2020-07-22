import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import CloseIcon from "./CloseIcon";

import { Colors } from "../utilities";

const Modal = ({ isToggle, setIsToggle, children }) => {
  return (
    <AnimatePresence>
      {isToggle && (
        <ModalDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            exit={{ x: 250 }}
          >
            <CloseIcon
              onClick={() => setIsToggle(false)}
              strokeColor={Colors.white}
            />

            {children}
          </motion.div>
        </ModalDiv>
      )}
    </AnimatePresence>
  );
};

const ModalDiv = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  margin: auto;
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translate(-50%);
  z-index: 999;
  padding: 20;
`;

export default Modal;
