import React, { useState, useEffect } from "react";
import { useStyles } from "./style";
import { AnimatePresence, motion } from "framer-motion";

export const TopButton = () => {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 95) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={`${isVisible ? classes.button : classes.buttonNone}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ scale: 0, y: -100 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0, y: -100 }}
          transition={{ duration: 0.2 }}
          whileTap={{ scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M20.485 15.535L12 7.05005L3.51499 15.535L4.92899 16.95L12 9.87805L19.071 16.95L20.485 15.535Z"
              fill="#000"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
