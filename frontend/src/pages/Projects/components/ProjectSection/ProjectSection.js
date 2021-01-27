import React from "react";
import { useStyles } from "./style";
import {
  Card,
  Subtitle,
  Button,
  TextProperty,
  Text,
  SocialIcon,
  ButtonLink,
  SmallText,
  Image,
} from "../../../../components";
import { Icon } from "../../../../resources";
import { projects } from "../../../../config";
import { TECHNOLOGIES } from "../../../../constants";
import { motion } from "framer-motion";
import { ProjectCardAnimation } from "../../animations/ProjectCardAnimation/ProjectCardAnimation";

export const ProjectSection = ({ filterValue }) => {
  const classes = useStyles();

  const filteredProjects = projects.filter((project) => {
    if (
      project.technologies.find(({ id }) => id === filterValue) ||
      filterValue === TECHNOLOGIES.SHOWALL.id
    ) {
      return true;
    }

    return false;
  });

  return (
    <>
      {filteredProjects.map((project, projectIndex) => {
        return (
          <ProjectCardAnimation
            className={classes.projectsCard}
            key={`projects-${projectIndex}`}
          >
            <Card>
              <div className={classes.cardSection}>
                <div className={classes.leftSection}>
                  <Subtitle bold style={{ marginBottom: "10px" }}>
                    {project.heading}
                  </Subtitle>
                  <Text style={{ marginBottom: "24px" }}>
                    {project.subheading}
                  </Text>
                  <Text bold style={{ marginBottom: "10px" }}>
                    {project.description}
                  </Text>
                  <div className={classes.items}>
                    {project.functionalities.map((functionality, index) => {
                      return (
                        <div
                          className={classes.item}
                          key={`functionalities-${projectIndex}-${index}`}
                        >
                          <SocialIcon>
                            <Icon.Bullet />
                          </SocialIcon>
                          <Text bold>{functionality}</Text>
                        </div>
                      );
                    })}
                  </div>
                  <div className={classes.buttonLink}>
                    <ButtonLink
                      isExternalLink
                      size="MD"
                      corner={8}
                      href={project.link.href}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <SocialIcon style={{ marginRight: "4px" }}>
                        <Icon.ExternalLink color="#000" />
                      </SocialIcon>
                      <Text>
                        <TextProperty color="BLACK">
                          {project.link.label}
                        </TextProperty>
                      </Text>
                    </ButtonLink>
                  </div>
                  <Text bold style={{ marginBottom: "10px" }}>
                    Technologies:
                  </Text>
                  <div className={classes.technologies}>
                    {project.technologies.map((technology, index) => {
                      return (
                        <Button
                          key={`technologies-${projectIndex}-${index}`}
                          type="OUTLINE"
                          size="SM"
                          color="SUBTLE"
                          corner={8}
                          whileHover={{
                            boxShadow: "0 0 0 2px rgba(130,130,118,1)",
                          }}
                          whileFocus={{
                            boxShadow: "0 0 0 2px rgba(130,130,118,1)",
                          }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <SmallText>
                            <TextProperty color="TERTIARY">
                              {technology.label}
                            </TextProperty>
                          </SmallText>
                        </Button>
                      );
                    })}
                  </div>
                </div>
                <div className={classes.rightSection}>
                  <div className={classes.images}>
                    {project.images.map((image, index) => {
                      return (
                        <Image
                          src={process.env.PUBLIC_URL + image}
                          key={`images-${projectIndex}-${index}`}
                          widthM="100%"
                          heightM="100%"
                          widthT="100%"
                          heightT="100%"
                          widthD="auto"
                          heightD="auto"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card>
          </ProjectCardAnimation>
        );
      })}
    </>
  );
};
