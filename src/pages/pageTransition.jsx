// pageTransition.js
import React from 'react';
import { motion } from 'framer-motion';

const transition = (MyComponent) => {
  return (props) => (
    <>
      <MyComponent {...props} />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0, transformOrigin: "bottom" }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1, transformOrigin: "bottom" }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
      />
    </>
  );
};

export default transition;