import React, { useState, useRef, useEffect } from "react";
import { useStyles } from "./style";
import { Icon } from "../../../../resources";
import { ContactFormAnimation } from "../../animations";
import { db } from "../../../../firebase";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import {
  Form,
  FormGroup,
  FormInput,
  FormRow,
  FormTextArea,
  Button,
  TextProperty,
  SocialIcon,
  Heading3,
  Text,
} from "../../../../components";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("This field is required"),
  company: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Please type your email address in this format any@example.com")
    .required("This field is required"),
  message: Yup.string().required("This field is required"),
});

export const ContactForm = () => {
  const classes = useStyles();
  const [successMessage, setSuccessMessage] = useState("");
  const [open, setOpen] = useState(false);
  const {
    values,
    handleSubmit,
    handleChange,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      company: "",
      email: "",
      message: "",
    },
    onSubmit: (values, actions) => {
      actions.setSubmitting(true);

      setTimeout(() => {
        db.collection("contacts")
          .add(values)
          .then(() => {
            setSuccessMessage("Message has been submitted");
            setOpen(true);
            actions.resetForm();
          })
          .catch((error) => {
            alert(error);
          })
          .finally(() => actions.setSubmitting(false));
      }, 1200);
    },
    validationSchema: ContactSchema,
    validateOnChange: false,
  });

  const refs = {
    name: useRef(null),
    company: useRef(null),
    email: useRef(null),
    message: useRef(null),
    send: useRef(null),
  };

  useEffect(() => {
    refs.name.current.focus();
  }, []);

  useEffect(() => {
    const errorKeys = Object.keys(errors);
    errorKeys.length > 0 && refs[errorKeys[0]].current.focus();
  }, [errors]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  return (
    <ContactFormAnimation className={classes.formWrapper}>
      <Form onSubmit={handleSubmit}>
        <Heading3 style={{ marginBottom: "10px" }}>GET IN TOUCH</Heading3>
        <Text style={{ marginBottom: "30px" }}>
          Does your project need a Frontend Developer? Fill out this form or
          let's get social.
        </Text>
        <FormRow>
          <FormGroup>
            <FormInput
              label="Full Name"
              id="full-name"
              variant="outlined"
              fullWidth
              type="text"
              name="name"
              value={values.name}
              ref={refs.name}
              onChange={handleChange}
              error={touched.name && !!errors.name}
              helperText={touched.name && errors.name}
            />
          </FormGroup>

          <FormGroup>
            <FormInput
              label="Company"
              id="company"
              variant="outlined"
              fullWidth
              type="text"
              name="company"
              value={values.company}
              ref={refs.company}
              onChange={handleChange}
              error={touched.company && !!errors.company}
              helperText={touched.company && errors.company}
            />
          </FormGroup>
        </FormRow>

        <FormGroup>
          <FormInput
            label="Email Address"
            id="email-address"
            variant="outlined"
            fullWidth
            type="email"
            name="email"
            value={values.email}
            ref={refs.email}
            onChange={handleChange}
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
          />
        </FormGroup>

        <FormGroup>
          <FormTextArea
            multiline
            label="Message"
            placeholder="Tell me about project details or anything"
            variant="outlined"
            rows={5}
            fullWidth
            name="message"
            value={values.message}
            ref={refs.message}
            onChange={handleChange}
            error={touched.message && !!errors.message}
            helperText={touched.message && errors.message}
          />
        </FormGroup>

        <Button
          disabled={isSubmitting}
          buttonType="OUTLINE"
          type="submit"
          size="MD"
          corner="8"
          ref={refs.send}
          whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.85 }}
        >
          {isSubmitting ? (
            <>
              <motion.span
                initial={{ scale: 0, y: 0, x: 0 }}
                animate={{
                  rotate: 40,
                  y: [0, -100],
                  x: [10, 0, 400],
                  scale: [1, 1.5, 0],
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{ width: "30px", height: "24px" }}
              >
                <SocialIcon style={{ marginRight: "6px" }}>
                  <Icon.Send color="#000" />
                </SocialIcon>
              </motion.span>
              <Text bold>
                <TextProperty color="BLACK">Sending...</TextProperty>
              </Text>
            </>
          ) : (
            <>
              <SocialIcon style={{ marginRight: "6px" }}>
                <Icon.Send color="#000" />
              </SocialIcon>
              <Text bold>
                <TextProperty color="BLACK">Send Message</TextProperty>
              </Text>
            </>
          )}
        </Button>
        {successMessage && (
          <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Alert onClose={handleClose} severity="success">
              {successMessage}
            </Alert>
          </Snackbar>
        )}
      </Form>
    </ContactFormAnimation>
  );
};
