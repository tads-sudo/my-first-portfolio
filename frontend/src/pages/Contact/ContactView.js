import React from "react";
import { ContactForm, ContactFormWrapper } from "./components";
import { Heading3, Text, LinkText } from "../../components";
import { motion } from "framer-motion";
export const ContactView = () => {
  const pageAnimation = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <motion.section
      initial="initial"
      animate="in"
      exit="out"
      variants={pageAnimation}
      // transition={{ type: "tween", ease: "anticipate" }}
    >
      <ContactFormWrapper>
        <Heading3>Contact Me</Heading3>
        <Text bold style={{ marginBottom: "24px" }}>
          If you wanna talk about a project please fill in the form below or
          send me an <LinkText>email</LinkText>.
        </Text>
        <ContactForm />
      </ContactFormWrapper>
    </motion.section>
  );
};
