import React from "react";
import { useStyles } from "./style";
import {
  Heading3,
  Card,
  Subtitle,
  Text,
  SkillIcon,
} from "../../../../components";
import {
  Html,
  ReactJs,
  Css,
  Bootstrap,
  Javascript,
  ReactRouter,
  Redux,
  Figma,
  AdobeAfterEffect,
  Photoshop,
  AdobeIllustrator,
  Node,
  Mongodb,
  ExpressJs,
  Mongoose,
  Github,
  Heroku,
  Npm,
  Postman,
  Jss,
  Framer,
} from "../../../../resources";
import { Heading3Animation } from "../../animations";

export const SkillsSection = () => {
  const classes = useStyles();
  return (
    <>
      <Heading3Animation
        className={classes.heading3}
        transition={{ delay: "0.2" }}
      >
        <Heading3>SKILLS</Heading3>
      </Heading3Animation>
      <div className={classes.skillsContainer}>
        {/* HTML & CSS */}
        <Card
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Subtitle style={{ marginBottom: "15px" }}>Html & Css</Subtitle>
          <div className={classes.rowSkills}>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <Html />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>Html 5</Text>
            </div>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <ReactJs />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>Jsx</Text>
            </div>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <Css />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>Css 3</Text>
            </div>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <Bootstrap />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>Boostrap 4</Text>
            </div>
          </div>
        </Card>
        {/* JAVSCRIPT */}
        <Card
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Subtitle style={{ marginBottom: "15px" }}>Javascript</Subtitle>
          <div className={classes.rowSkills}>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <Javascript />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>Javascript</Text>
            </div>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <ReactJs />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>React</Text>
            </div>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <ReactJs />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>React Native</Text>
            </div>
          </div>
        </Card>
        {/* REACT */}
        <Card
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Subtitle style={{ marginBottom: "15px" }}>React</Subtitle>
          <div className={classes.rowSkills}>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <ReactRouter />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>React Router</Text>
            </div>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <Redux />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>Redux</Text>
            </div>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <Jss />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>React-Jss</Text>
            </div>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <Framer />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>Framer Motion</Text>
            </div>
          </div>
        </Card>
        {/* DESIGN */}
        <Card
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Subtitle style={{ marginBottom: "15px" }}>Design</Subtitle>
          <div className={classes.rowSkills}>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <Figma />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>Figma</Text>
            </div>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <AdobeAfterEffect />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>After Effect</Text>
            </div>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <Photoshop />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>Photoshop</Text>
            </div>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <AdobeIllustrator />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>Adobe Illustrator</Text>
            </div>
          </div>
        </Card>
        {/* BACKEND */}
        <Card
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Subtitle style={{ marginBottom: "15px" }}>Backend</Subtitle>
          <div className={classes.rowSkills}>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <Node />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>NodeJS</Text>
            </div>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <Mongodb />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>MongoDB</Text>
            </div>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 100 40">
                <ExpressJs />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>ExpressJS</Text>
            </div>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 100 40">
                <Mongoose />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>Mongoose</Text>
            </div>
          </div>
        </Card>
        {/* OTHERS */}
        <Card
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Subtitle style={{ marginBottom: "15px" }}>Others</Subtitle>
          <div className={classes.rowSkills}>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <Github />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>Github</Text>
            </div>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <Heroku />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>Heroku</Text>
            </div>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 25 25">
                <Npm />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>Npm</Text>
            </div>
            <div className={classes.skill}>
              <SkillIcon size={25} viewBox="0 0 100 40">
                <Postman />
              </SkillIcon>
              <Text style={{ textAlign: "center" }}>Postman</Text>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
