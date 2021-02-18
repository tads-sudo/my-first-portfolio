import React from "react";
import { useStyles } from "./style";
import {
  Heading1,
  Heading2,
  TextProperty,
  Text,
  ButtonLink,
  SmallText,
  SocialIcon,
  BackgroundElement,
  Meta,
} from "../../components";
import {
  SocialIconAnimation,
  CircleAnimation,
  BallchairAnimation,
  SocialIconsAnimation,
  PageAnimation,
  Heading1Animation,
  Heading2Animation,
  TextAnimation,
  ButtonAnimation,
} from "./animations";
import { Icon, Circle, Ballchair } from "../../resources";

export const AboutView = () => {
  const classes = useStyles();

  return (
    <>
      <Meta />
      <PageAnimation>
        <BackgroundElement />
        <h1>asd</h1>
        <div className={classes.container}>
          <CircleAnimation className={classes.circle}>
            <Circle />
          </CircleAnimation>
          <div className={classes.headingsBallChair}>
            <div className={classes.headings}>
              <Heading1Animation>
                <Heading1 style={{ marginBottom: "12px" }}>
                  Hi, I'm <TextProperty color="PRIMARY">Amado</TextProperty>
                </Heading1>
              </Heading1Animation>
              <Heading2Animation>
                <Heading2 style={{ marginBottom: "12px" }}>
                  I‘m junior web developer, specializing in front-end
                  development.
                </Heading2>
              </Heading2Animation>
              <TextAnimation>
                <Text bold style={{ marginBottom: "24px" }}>
                  Current Focus:{" "}
                  <TextProperty color="PRIMARY" weight="NORMAL">
                    React-Jss, Framer-Motion, Design System, and Figma
                  </TextProperty>
                </Text>
              </TextAnimation>
              <ButtonAnimation>
                <ButtonLink to="/projects" size="MD" corner="8">
                  <SmallText>
                    <TextProperty color="BLACK" weight="BOLD">
                      CHECK OUT MY WORK
                    </TextProperty>
                  </SmallText>
                </ButtonLink>
              </ButtonAnimation>
            </div>
            <BallchairAnimation>
              <Ballchair className={classes.ballChair} />
            </BallchairAnimation>
          </div>
          <SocialIconsAnimation className={classes.icons}>
            <SocialIconAnimation href="https://www.facebook.com/amado.viernes/">
              <SocialIcon>
                <Icon.Facebook color="#828276" />
              </SocialIcon>
            </SocialIconAnimation>
            <SocialIconAnimation href="https://www.linkedin.com/in/amado-viernes-67450b190/">
              <SocialIcon>
                <Icon.Linkedin color="#828276" />
              </SocialIcon>
            </SocialIconAnimation>
            <SocialIconAnimation href="https://github.com/tads-sudo">
              <SocialIcon>
                <Icon.Github color="#828276" />
              </SocialIcon>
            </SocialIconAnimation>
            <SocialIconAnimation href="mailto:amadoviernes6@gmail.com">
              <SocialIcon>
                <Icon.Gmail color="#828276" />
              </SocialIcon>
            </SocialIconAnimation>
          </SocialIconsAnimation>
        </div>
      </PageAnimation>
    </>
  );
};
