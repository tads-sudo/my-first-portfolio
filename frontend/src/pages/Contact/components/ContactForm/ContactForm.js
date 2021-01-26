import React from "react";
import {
  Form,
  FormGroup,
  FormInput,
  FormInputLabel,
  FormRow,
  FormTextArea,
  Button,
  TextProperty,
  ButtonText,
} from "../../../../components";

export const ContactForm = () => {
  return (
    <Form>
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
      <Button size="LG" corner="8">
        <ButtonText>
          <TextProperty color="BLACK">SUBMIT YOUR MESSAGE</TextProperty>
        </ButtonText>
      </Button>
    </Form>
  );
};
