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
import {
  ThousandmindsMob,
  ThousandmindsTabDesk,
  CtiMob,
  CtiTabDesk,
  Icon,
} from "../../../../resources";

export const ExperieceSections = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.heading3}>
        <Heading3>EXPERIENCE</Heading3>
      </div>
      <div className={classes.experienceContainer}>
        {/* DISPLAY NONE TO DESKTOP */}
        <div className={classes.thousandmindsMobTab}>
          <Card>
            <div className={classes.cardContainer}>
              <div className={classes.logoAndTitle}>
                <div className={classes.companyMobLogo}>
                  <CompanyLogo viewBox="0 0 314 115" width={220} height={80}>
                    <ThousandmindsMob />
                  </CompanyLogo>
                </div>
                <div className={classes.companyTabDeskLogo}>
                  <CompanyLogo viewBox="0 0 200 115" width={200} height={115}>
                    <ThousandmindsTabDesk />
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
                      Started learning about React, React-native, Redux, and
                      Axios.
                    </Text>
                  </div>
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
                      Developed and implemented functional requirement based on
                      client requirement using react and react native.
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
                    <Text>Used gitlab as versioning control.</Text>
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
                  <TextProperty color="SUBTLE">
                    Jan. 2020 - June 2020
                  </TextProperty>
                </SmallText>
              </div>
            </div>
          </Card>
        </div>
        <div className={classes.ctiMobTab}>
          <Card>
            <div className={classes.cardContainer}>
              <div className={classes.logoAndTitle}>
                <div className={classes.companyMobLogo}>
                  <CompanyLogo viewBox="0 0 314 115" width={220} height={80}>
                    <CtiMob />
                  </CompanyLogo>
                </div>
                <div className={classes.companyTabDeskLogo}>
                  <CompanyLogo viewBox="0 0 200 115" width={200} height={115}>
                    <CtiTabDesk />
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
                      Inspect all the deliverable units are in acceptable
                      quality and if complete and correct.
                    </Text>
                  </div>
                  <div className={classes.item}>
                    <SocialIcon>
                      <Icon.Bullet />
                    </SocialIcon>
                    <Text>
                      Testing of units if within the specification for final
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
                  <TextProperty color="SUBTLE">
                    Sept. 2019 - Dec. 2019
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
