import * as React from "react";
import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
};

function PageTurner({ fillColor, ...props }) {
  return (
    <motion.svg viewBox="0 0 1600 900" {...props}>
      <motion.path fill={fillColor} d="M0 0h1600v900H0z" />
      <defs>
        <linearGradient id="prefix__a" x1={0} x2={0} y1={1} y2={0}>
          <stop offset={0} stopColor="#430099" />
          <stop offset={1} stopColor="#ff6800" />
        </linearGradient>
        <linearGradient id="prefix__b" x1={0} x2={0} y1={0} y2={1}>
          <stop offset={0} stopColor="#430099" />
          <stop offset={1} stopColor="#ff6800" />
        </linearGradient>
      </defs>
      <g fill="none" fillOpacity={0} strokeMiterlimit={10}>
        <g stroke="url(#prefix__a)" strokeWidth={2}>
          <motion.path
            d="M1409 581l41.35-70 39.65 70z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <circle strokeWidth={4} cx={500} cy={100} r={40} />
          <motion.path
            d="M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87s41.86 18.75 41.86 41.87z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </g>
        <g stroke="url(#prefix__b)" strokeWidth={4}>
          <motion.path
            d="M149.8 345.2l-31.4 44.6 31.4 44.6 31.4-44.6z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            strokeWidth={8}
            d="M1039 709h100v100h-100z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M1426.8 132.4l-21.1 36.4h-42l-21-36.4 21-36.4h42z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </g>
      </g>
    </motion.svg>
  );
}

export default PageTurner;
