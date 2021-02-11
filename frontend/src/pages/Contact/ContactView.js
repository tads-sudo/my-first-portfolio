import React from "react";
import { useStyles } from "./style";
import {
  ContactForm,
  SocialIcons,
  BackgroundTop,
  BackgroundBot,
} from "./components";
import { PageAnimation } from "./animations";

export const ContactView = () => {
  const classes = useStyles();

  return (
    <PageAnimation className={classes.container}>
      <BackgroundTop />
      <BackgroundBot />
      <div className={classes.contactForm}>
        <ContactForm />
      </div>
      <SocialIcons />
    </PageAnimation>
  );
};
