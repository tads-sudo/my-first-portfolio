import React from "react";
import {
  Form,
  FormGroup,
  FormInput,
  FormInputLabel,
  FormRow,
  FormTextArea,
  Button,
  Text,
  ColoredText,
} from "../../../../components";

export const ContactForm = () => {
  return (
    <Form>
      <FormGroup>
        <FormInputLabel>Your name</FormInputLabel>
        <FormInput placeholder="Name" />
      </FormGroup>
      <FormRow>
        <FormGroup>
          <FormInputLabel>Your company</FormInputLabel>
          <FormInput placeholder="Company" />
        </FormGroup>
        <FormGroup>
          <FormInputLabel>Your email</FormInputLabel>
          <FormInput placeholder="Email" />
        </FormGroup>
      </FormRow>
      <FormGroup>
        <FormInputLabel>About your project</FormInputLabel>
        <FormTextArea placeholder="Message" />
      </FormGroup>
      <Button size="SM" corner="8">
        <Text>
          <ColoredText color="BLACK">SUBMIT YOUR MESSAGE</ColoredText>
        </Text>
      </Button>
    </Form>
  );
};
