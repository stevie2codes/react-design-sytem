import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

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
            <CloseButton onClick={() => setIsToggle(false)}>Close</CloseButton>
            {children}
          </motion.div>
        </ModalDiv>
      )}
    </AnimatePresence>
  );
};

const CloseButton = styled(motion.button)`
  border: none;
  background: tomato;
  color: white;
`;

const ModalDiv = styled(motion.div)`
  position: fixed;
  top: 200px;
  left: 50%;
  transform: translate3d(-50%, 50%);
`;
export default Modal;
