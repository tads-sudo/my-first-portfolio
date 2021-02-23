import React from "react";
import { useStyles } from "./style";
import {
  ContactForm,
  SocialIcons,
  BackgroundTop,
  BackgroundBot,
} from "./components";
import { PageAnimation } from "./animations";
import { Meta } from "../../components";
import { meta } from "../../config";

export const ContactView = () => {
  const classes = useStyles();

  return (
    <>
      <Meta title={meta.CONTACT.TITLE} description={meta.CONTACT.DESCRIPTION} />
      <PageAnimation className={classes.container}>
        <BackgroundTop />
        <BackgroundBot />
        <div className={classes.contactForm}>
          <ContactForm />
        </div>
        <SocialIcons />
      </PageAnimation>
    </>
  );
};

export default ContactView;
