import React from "react";
import { useStyles } from "./style";
import {
  Heading3,
  Card,
  Subtitle,
  Text,
  CompanyLogo,
  SocialIcon,
  SmallText,
  TextProperty,
} from "../../../../components";
import { ThousandmindsMob, CtiMob, Icon } from "../../../../resources";
import { Heading3Animation } from "../../animations";

export const ExperieceSections = () => {
  const classes = useStyles();
  return (
    <>
      <Heading3Animation
        className={classes.heading3}
        transition={{ delay: "0.9" }}
      >
        <Heading3>EXPERIENCE</Heading3>
      </Heading3Animation>
      <div className={classes.experienceContainer}>
        <div className={classes.thousandmindsMobTab}>
          <Card
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className={classes.cardContainer}>
              <div className={classes.logoAndTitle}>
                <div className={classes.companyMobLogo}>
                  <CompanyLogo viewBox="0 0 314 115" width={220} height={80}>
                    <ThousandmindsMob />
                  </CompanyLogo>
                </div>
                <div className={classes.cardTitle}>
                  <div className={classes.companyName}>
                    <div className={classes.companyNameTab}>
                      <Subtitle>
                        Thousandminds Social Media Incorporated
                      </Subtitle>
                    </div>
                    <div className={classes.companyNameDesk}>
                      <Text bold>Thousandminds Social Media Incorporated</Text>
                    </div>
                  </div>
                  <div className={classes.workTitleMobileTab}>
                    <Subtitle>Frontend Developer</Subtitle>
                  </div>
                  <div className={classes.workTitleDesk}>
                    <Text>Frontend Developer</Text>
                  </div>
                </div>
              </div>
              <div className={classes.cardBody}>
                <Text bold style={{ marginBottom: "15px" }}>
                  Accomplishments
                </Text>
                <div className={classes.items}>
                  <div className={classes.item}>
                    <SocialIcon>
                      <Icon.Bullet />
                    </SocialIcon>
                    <Text>
                      Acquired novice level experience in React and
                      React-native.
                    </Text>
                  </div>
                  <div className={classes.item}>
                    <SocialIcon>
                      <Icon.Bullet />
                    </SocialIcon>
                    <Text>
                      Developed and implemented functional requirements based on
                      client requirements using react and react-native.
                    </Text>
                  </div>
                  <div className={classes.item}>
                    <SocialIcon>
                      <Icon.Bullet />
                    </SocialIcon>
                    <Text>Implemented EcmaScript6 (ES6) arrow functions.</Text>
                  </div>
                  <div className={classes.item}>
                    <SocialIcon>
                      <Icon.Bullet />
                    </SocialIcon>
                    <Text>Created reusable components for future use.</Text>
                  </div>
                  <div className={classes.item}>
                    <SocialIcon>
                      <Icon.Bullet />
                    </SocialIcon>
                    <Text>Used GitLab as versioning control.</Text>
                  </div>
                  <div className={classes.item}>
                    <SocialIcon>
                      <Icon.Bullet />
                    </SocialIcon>
                    <Text>Web Technologies: HTML5, CSS3, JavaScript</Text>
                  </div>
                  <div className={classes.item}>
                    <SocialIcon>
                      <Icon.Bullet />
                    </SocialIcon>
                    <Text>JavaScript Libraries: React, React-Native</Text>
                  </div>
                </div>
              </div>
              <div className={classes.dateInCard}>
                <SmallText>
                  <TextProperty color="TERTIARY">
                    January 2020 - June 2020
                  </TextProperty>
                </SmallText>
              </div>
            </div>
          </Card>
        </div>
        <div className={classes.ctiMobTab}>
          <Card
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className={classes.cardContainer}>
              <div className={classes.logoAndTitle}>
                <div className={classes.companyMobLogo}>
                  <CompanyLogo viewBox="0 0 314 115" width={220} height={80}>
                    <CtiMob />
                  </CompanyLogo>
                </div>
                <div className={classes.cardTitle}>
                  <div className={classes.companyName}>
                    <div className={classes.companyNameTab}>
                      <Subtitle>Columbia Technologies Incorporated</Subtitle>
                    </div>
                    <div className={classes.companyNameDesk}>
                      <Text bold>Columbia Technologies Incorporated</Text>
                    </div>
                  </div>
                  <div className={classes.workTitleMobileTab}>
                    <Subtitle>Quality Control Inspector</Subtitle>
                  </div>
                  <div className={classes.workTitleDesk}>
                    <Text>Quality Control Inspector</Text>
                  </div>
                </div>
              </div>
              <div className={classes.cardBody}>
                <Text bold style={{ marginBottom: "15px" }}>
                  Accomplishments
                </Text>
                <div className={classes.items}>
                  <div className={classes.item}>
                    <SocialIcon>
                      <Icon.Bullet />
                    </SocialIcon>
                    <Text>
                      Inspect that all the deliverable units are of acceptable
                      quality and if complete and correct.
                    </Text>
                  </div>
                  <div className={classes.item}>
                    <SocialIcon>
                      <Icon.Bullet />
                    </SocialIcon>
                    <Text>
                      Testing of units is within the specification for the final
                      product.
                    </Text>
                  </div>
                  <div className={classes.item}>
                    <SocialIcon>
                      <Icon.Bullet />
                    </SocialIcon>
                    <Text>
                      Notifies the supervisor and works with them to check the
                      problem.
                    </Text>
                  </div>
                </div>
              </div>
              <div className={classes.dateInCard}>
                <SmallText>
                  <TextProperty color="TERTIARY">
                    September 2019 - December 2019
                  </TextProperty>
                </SmallText>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};
