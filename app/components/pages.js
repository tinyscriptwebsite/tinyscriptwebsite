"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import "../globals.css";

const Pages = ({ children }) => {
  return (
    <div className="bg-primary">
      {children}
      {/* <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            scale: 0,
          },
          pageAnimate: {
            scale: 1,
            transition: {
              duration: 0.5,
            },
          },
          pageExit: {
            scale: 0,
            transition: {
              duration: 0.5,
            },
          },
        }}
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 9999,
        }}
      >
        {children}
      </motion.div> */}
    </div>
  );
};

export default Pages;
