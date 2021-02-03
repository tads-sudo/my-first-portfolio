import React from "react";
import { useStyles } from "./style";
import { ContactForm } from "./components";
import { SocialIcons } from "./components";
import { PageAnimation } from "./animations";

export const ContactView = () => {
  const classes = useStyles();

  return (
    <PageAnimation className={classes.container}>
      <div className={classes.contactForm}>
        <ContactForm />
      </div>
      <SocialIcons />
    </PageAnimation>
  );
};
