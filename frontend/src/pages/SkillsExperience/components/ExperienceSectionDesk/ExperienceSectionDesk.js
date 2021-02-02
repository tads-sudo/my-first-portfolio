import React from "react";
import { useStyles } from "./style";
import {
  CompanyLogo,
  SmallText,
  Text,
  SocialIcon,
} from "../../../../components";
import { CtiTabDesk, Icon, ThousandmindsTabDesk } from "../../../../resources";
import { TimelineAnimation } from "../../animations";

export const ExperienceSectionDesk = () => {
  const classes = useStyles();
  return (
    <>
      <TimelineAnimation className={classes.timeline} transition={{ delay: 1 }}>
        <div className={classes.timelineBody}>
          <div className={classes.timelineItem}>
            <div className={classes.time}>
              <SmallText>Jan. 2020 - June 2020</SmallText>
            </div>
            <div className={classes.content}>
              <div className={classes.leftContent}>
                <CompanyLogo
                  viewBox="0 0 200 115"
                  width={200}
                  height={115}
                  style={{ marginBottom: "15px" }}
                >
                  <ThousandmindsTabDesk />
                </CompanyLogo>
                <Text bold style={{ marginBottom: "5px" }}>
                  Thousandminds Social Media Incorporated
                </Text>
                <Text>Junior Web Developer</Text>
              </div>
              <div className={classes.rightContent}>
                <div className={classes.rightContentSubtitle}>
                  <Text bold>Accomplishments</Text>
                </div>
                <div className={classes.itemss}>
                  <div className={classes.itemm}>
                    <SocialIcon>
                      <Icon.Bullet />
                    </SocialIcon>
                    <Text>
                      Started learning about React, React-native, Redux, and
                      Axios.
                    </Text>
                  </div>
                  <div className={classes.itemm}>
                    <SocialIcon>
                      <Icon.Bullet />
                    </SocialIcon>
                    <Text>
                      Acquired novice level experience in React and
                      React-native.
                    </Text>
                  </div>
                  <div className={classes.itemm}>
                    <SocialIcon>
                      <Icon.Bullet />
                    </SocialIcon>
                    <Text>
                      Developed and implemented functional requirement based on
                      client requirement using react and react native.
                    </Text>
                  </div>
                  <div className={classes.itemm}>
                    <SocialIcon>
                      <Icon.Bullet />
                    </SocialIcon>
                    <Text>Implemented EcmaScript6 (ES6) arrow functions.</Text>
                  </div>
                  <div className={classes.itemm}>
                    <SocialIcon>
                      <Icon.Bullet />
                    </SocialIcon>
                    <Text>Created reusable components for future use.</Text>
                  </div>
                  <div className={classes.itemm}>
                    <SocialIcon>
                      <Icon.Bullet />
                    </SocialIcon>
                    <Text>Used gitlab as versioning control.</Text>
                  </div>
                  <div className={classes.itemm}>
                    <SocialIcon>
                      <Icon.Bullet />
                    </SocialIcon>
                    <Text>Web Technologies: HTML5, CSS3, JavaScript</Text>
                  </div>
                  <div className={classes.itemm}>
                    <SocialIcon>
                      <Icon.Bullet />
                    </SocialIcon>
                    <Text>JavaScript Libraries: React, React-Native</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TimelineAnimation>
      <div className={classes.cti}>
        <TimelineAnimation
          className={classes.timeline}
          transition={{ delay: 1.1 }}
        >
          <div className={classes.timelineBody}>
            <div className={classes.timelineItem}>
              <div className={classes.time}>
                <SmallText>Sept. 2019 - Dec. 2019</SmallText>
              </div>
              <div className={classes.content}>
                <div className={classes.leftContent}>
                  <CompanyLogo
                    viewBox="0 0 200 115"
                    width={200}
                    height={115}
                    style={{ marginBottom: "15px" }}
                  >
                    <CtiTabDesk />
                  </CompanyLogo>
                  <Text bold style={{ marginBottom: "5px" }}>
                    Columbia Technologies Incorporated
                  </Text>
                  <Text>Quality Control Inspector</Text>
                </div>
                <div className={classes.rightContent}>
                  <div className={classes.rightContentSubtitle}>
                    <Text bold>Accomplishments</Text>
                  </div>
                  <div className={classes.itemss}>
                    <div className={classes.itemm}>
                      <SocialIcon>
                        <Icon.Bullet />
                      </SocialIcon>
                      <Text>
                        Inspect all the deliverable units are in acceptable
                        quality and if complete and correct.
                      </Text>
                    </div>
                    <div className={classes.itemm}>
                      <SocialIcon>
                        <Icon.Bullet />
                      </SocialIcon>
                      <Text>
                        Testing of units if within the specification for final
                        product.
                      </Text>
                    </div>
                    <div className={classes.itemm}>
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
              </div>
            </div>
          </div>
        </TimelineAnimation>
      </div>
    </>
  );
};
