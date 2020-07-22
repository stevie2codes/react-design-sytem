import React from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../utilities/Colors";
import { Elevation } from "../utilities";
import { motion, AnimatePresence } from "framer-motion";
import { PrimaryFont, fixed } from "../utilities";
import CloseIcon from "../elements/CloseIcon";

import Home from "../pages/Home";
import About from "../pages/About";
import ParticlesElement from "../elements/Particles";

export const Nav = ({ isNav, setIsNav }) => {
  return (
    <>
      <AnimatePresence>
        <BrowserRouter>
          <MenuNav
            variants={variants}
            initial="closed"
            animate={isNav ? "open" : "closed"}
            transition={{ damping: 300 }}
          >
            <ParticlesElement />
            <CloseIcon onClick={() => setIsNav(false)} strokeColor={"#fff"} />
            <motion.ul variants={ulVariants}>
              <motion.li variants={liVariants}>
                <Link to="/" onClick={() => setIsNav(false)}>
                  Home{" "}
                </Link>
              </motion.li>
              <motion.li variants={liVariants}>
                <Link to="/about" onClick={() => setIsNav(false)}>
                  About
                </Link>
              </motion.li>
              <motion.li variants={liVariants}>
                <Link to="/portfolio">Portfolio</Link>
              </motion.li>
              <motion.li variants={liVariants}>
                <Link to="/contact">Contact</Link>
              </motion.li>
            </motion.ul>
          </MenuNav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
};

const MenuNav = styled(motion.nav)`
  ${fixed({ x: 0, y: 0 })};
  width: 300px;
  height: 100vh;
  background-color: ${Colors.purple};
  padding: 0px 50px;
  z-index: 100;
  ${Elevation[2]};
  ul {
    position: absolute;
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  li {
    padding: 0;
    margin: 50px auto 0px auto;
    font-size: 1.5rem;
    ${PrimaryFont};
  }
  a {
    color: ${Colors.white};
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: 0.2s ease-in-out border;
    position: relative;

    &::before {
      content: "";
      width: 100%;
      height: 10px;
      background-color: ${Colors.white};
      position: absolute;
      bottom: -10px;
      opacity: 0;
      transition: 0.3s linear all;
    }
    &:hover:before {
      right: 50%;
      width: 10px;
      border-radius: 50%;
      opacity: 1;
    }
  }
`;

const variants = {
  open: { x: 0 },
  closed: {
    x: "200%",
    transition: {
      delay: 0.3
    }
  }
};
const liVariants = {
  open: {
    x: 0,
    opacity: 1
  },
  closed: { x: -20, opacity: 0 }
};
const ulVariants = {
  open: {
    scale: 1.05,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      staggerDirection: 1,
      when: "afterChildren"
    }
  },
  closed: { scale: 1 }
};
