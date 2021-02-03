import React from "react";
import { useStyles } from "./style";
import {
  Form,
  FormGroup,
  FormInput,
  FormInputLabel,
  FormRow,
  FormTextArea,
  Button,
  TextProperty,
  SocialIcon,
  Heading3,
  Text,
  LinkText,
  SmallText,
} from "../../../../components";
import { Icon } from "../../../../resources";
import { ContactFormAnimation } from "../../animations/ContactFormAnimation/ContactFormAnimation";

export const ContactForm = () => {
  const classes = useStyles();
  return (
    <ContactFormAnimation className={classes.formWrapper}>
      <Form>
        <Heading3 style={{ marginBottom: "10px" }}>Contact Me</Heading3>
        <Text bold style={{ marginBottom: "24px" }}>
          If you wanna talk about a project please fill in the form below or
          send me an <LinkText>email</LinkText>.
        </Text>
        <FormRow>
          <FormGroup>
            <FormInputLabel>Your Name</FormInputLabel>
            <FormInput placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <FormInputLabel>Company Name</FormInputLabel>
            <FormInput placeholder="Company" />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <FormInputLabel>Email Address</FormInputLabel>
            <FormInput placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <FormInputLabel>Phone Number</FormInputLabel>
            <FormInput placeholder="Number" />
          </FormGroup>
        </FormRow>
        <FormGroup>
          <FormInputLabel>Project Details</FormInputLabel>
          <FormTextArea placeholder="Message" />
        </FormGroup>
        <Button
          size="SM"
          corner="8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.85 }}
        >
          <SocialIcon style={{ marginRight: "6px" }}>
            <Icon.Send color="#000" />
          </SocialIcon>
          <SmallText>
            <TextProperty color="BLACK">SEND</TextProperty>
          </SmallText>
        </Button>
      </Form>
    </ContactFormAnimation>
  );
};
