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
import { FooterAnimation, SocialIconAnimation } from "../../animations";

export const SkillsExperienceFooter = () => {
  const classes = useStyles();
  return (
    <>
      <FooterAnimation className={classes.footer}>
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
                <ButtonLink to="/contact" size="MD" corner={8}>
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
                    <SocialIconAnimation
                      href="mailto:amadoviernes6@gmail.com"
                      ariaLabel="Gmail"
                    >
                      <SocialIcon>
                        <Icon.Gmail color="#828276" />
                      </SocialIcon>
                    </SocialIconAnimation>
                    <Subtitle>Gmail</Subtitle>
                  </div>
                </div>
                <div className={classes.footerIconText}>
                  <SocialIconAnimation
                    href="https://www.facebook.com/amado.viernes/"
                    ariaLabel="Facebook"
                  >
                    <SocialIcon>
                      <Icon.Facebook color="#828276" />
                    </SocialIcon>
                  </SocialIconAnimation>
                  <Subtitle>Facebook</Subtitle>
                </div>
              </div>
            </div>
          </div>
        </Footer>
      </FooterAnimation>
    </>
  );
};
