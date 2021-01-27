import React from "react";
import { ContactForm, ContactFormWrapper } from "./components";
import { Heading3, Text, LinkText } from "../../components";
import { Icon, Skills } from "../../components";
export const ContactView = () => {
  return (
    <>
      <ContactFormWrapper>
        <Heading3>Contact Me</Heading3>
        <Text bold style={{ marginBottom: "24px" }}>
          If you wanna talk about a project please fill in the form below or
          send me an <LinkText>email</LinkText>.
        </Text>
        <ContactForm />
      </ContactFormWrapper>
    </>
  );
};
