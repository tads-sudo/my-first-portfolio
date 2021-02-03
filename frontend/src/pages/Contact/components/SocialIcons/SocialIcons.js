import React from "react";
import { useStyles } from "./style";
import { SmallText, SocialIcon } from "../../../../components";
import { Icon } from "../../../../resources";
import { SocialIconAnimation, SocialIconsAnimation } from "../../animations";

export const SocialIcons = () => {
  const classes = useStyles();

  return (
    <SocialIconsAnimation className={classes.icons}>
      <SocialIconAnimation href="...">
        <div className={classes.iconTextRow}>
          <SocialIcon>
            <Icon.Messenger color="#828276" />
          </SocialIcon>
          <div className={classes.text}>
            <SmallText>Messenger</SmallText>
          </div>
        </div>
      </SocialIconAnimation>
      <SocialIconAnimation href="...">
        <div className={classes.iconTextRow}>
          <SocialIcon>
            <Icon.Linkedin color="#828276" />
          </SocialIcon>
          <div className={classes.text}>
            <SmallText>Linkedin</SmallText>
          </div>
        </div>
      </SocialIconAnimation>
      <SocialIconAnimation href="...">
        <div className={classes.iconTextRow}>
          <SocialIcon>
            <Icon.Github color="#828276" />
          </SocialIcon>
          <div className={classes.text}>
            <SmallText>Github</SmallText>
          </div>
        </div>
      </SocialIconAnimation>
      <SocialIconAnimation href="...">
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
