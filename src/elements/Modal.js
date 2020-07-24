import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import CloseIcon from "./CloseIcon";
import signin from "../images/signin.svg";
import { Colors, Elevation, typeScale } from "../utilities";
import { PrimaryButton } from "../components/Buttons";

export const Modal = ({ isToggle, setIsToggle }) => {
  return (
    <AnimatePresence>
      {isToggle && (
        <ModalWrapper
          initial={{ opacity: 0, y: "-100%" }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 0.8
            }
          }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{
            type: "tween",
            stiffness: 600,
            default: { duration: 0.2 }
          }}
        >
          <img
            src={signin}
            alt="Account sign up"
            aria-hidden="true"
            style={{ height: "180px" }}
          />
          <SignUpHeader
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            Sign Up
          </SignUpHeader>
          <SignUpText
            variants={text2Variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            Sign up today to get access!
          </SignUpText>
          <PrimaryButton>Sign Up!</PrimaryButton>
          <ModalClosebtn aria-label="close modal">
            <CloseIcon
              onClick={() => setIsToggle(false)}
              strokeColor={Colors.darkGrey}
            />
          </ModalClosebtn>
        </ModalWrapper>
      )}
    </AnimatePresence>
  );
};

const ModalWrapper = styled(motion.div)`
  width: 700px;
  height: 600px;
  background: ${props => props.theme.colors.cardColor};
  ${Elevation[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 999;
  border-radius: 5px;
  padding: 0;
`;

const SignUpHeader = styled(motion.h3)`
  font-size: ${typeScale.header3};
  color: ${props => props.theme.colors.buttonText};
`;
const SignUpText = styled(motion.p)`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
  color: ${props => props.theme.colors.buttonText};
`;

const ModalClosebtn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 40px;
  right: 40px;
  background: transparent;
  border: none;
  width: 28px;
  height: 28px;
  padding: 0;
  z-index: 2000;
`;

export default Modal;

const textVariants = {
  hidden: { opacity: 0, x: "-600px" },
  visible: { opacity: 1, x: 0 }
};

const text2Variants = {
  hidden: { opacity: 0, x: "600px" },
  visible: { opacity: 1, x: 0 }
};
