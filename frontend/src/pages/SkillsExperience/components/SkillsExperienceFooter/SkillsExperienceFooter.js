import React from "react";
import { useStyles } from "./style";
import {
  Subtitle,
  SocialIcon,
  SmallText,
  TextProperty,
  Footer,
  ButtonLink,
} from "../../../../components";
import { Icon } from "../../../../resources";

export const SkillsExperienceFooter = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.footer}>
        <Footer>
          <div className={classes.footerContainer}>
            <div className={classes.footerColumn1}>
              <div className={classes.footerrow1}>
                <Subtitle>
                  Have an exciting project
                  <br className={classes.footerSubtitleLineBreak} /> where you
                  need some help?{" "}
                  <br className={classes.footerSubtitleLineBreak} />
                  Let’s build that cool stuff.
                </Subtitle>
              </div>
              <div className={classes.footerrow2}>
                <ButtonLink href="/contact" size="SM" corner={8}>
                  <SmallText>
                    <TextProperty color="BLACK">GET IN TOUCH</TextProperty>
                  </SmallText>
                </ButtonLink>
              </div>
            </div>
            <div className={classes.footerColumn2}>
              <div className={classes.footerSocialMedia}>
                <div className={classes.socialMediaRow1}>
                  <div className={classes.footerIconText}>
                    <SocialIcon>
                      <Icon.Gmail color="#828276" />
                    </SocialIcon>
                    <Subtitle>Gmail</Subtitle>
                  </div>
                </div>
                <div className={classes.footerIconText}>
                  <SocialIcon>
                    <Icon.Messenger color="#828276" />
                  </SocialIcon>
                  <Subtitle>Messenger</Subtitle>
                </div>
              </div>
            </div>
          </div>
        </Footer>
      </div>
    </>
  );
};
