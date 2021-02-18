import React from "react";
import { useStyles } from "./style";
import { SmallText, SocialIcon } from "../../../../components";
import { Icon } from "../../../../resources";
import { SocialIconAnimation, SocialIconsAnimation } from "../../animations";

export const SocialIcons = () => {
  const classes = useStyles();

  return (
    <SocialIconsAnimation className={classes.icons}>
      <SocialIconAnimation href="https://www.facebook.com/amado.viernes/">
        <div className={classes.iconTextRow}>
          <SocialIcon>
            <Icon.Facebook color="#828276" />
          </SocialIcon>
          <div className={classes.text}>
            <SmallText>Facebook</SmallText>
          </div>
        </div>
      </SocialIconAnimation>
      <SocialIconAnimation href="https://www.linkedin.com/in/amado-viernes-67450b190/">
        <div className={classes.iconTextRow}>
          <SocialIcon>
            <Icon.Linkedin color="#828276" />
          </SocialIcon>
          <div className={classes.text}>
            <SmallText>Linkedin</SmallText>
          </div>
        </div>
      </SocialIconAnimation>
      <SocialIconAnimation href="https://github.com/tads-sudo">
        <div className={classes.iconTextRow}>
          <SocialIcon>
            <Icon.Github color="#828276" />
          </SocialIcon>
          <div className={classes.text}>
            <SmallText>Github</SmallText>
          </div>
        </div>
      </SocialIconAnimation>
      <SocialIconAnimation href="mailto:amadoviernes6@gmail.com">
        <div className={classes.iconTextRow}>
          <SocialIcon>
            <Icon.Gmail color="#828276" />
          </SocialIcon>
          <div className={classes.text}>
            <SmallText>Gmail</SmallText>
          </div>
        </div>
      </SocialIconAnimation>
    </SocialIconsAnimation>
  );
};
