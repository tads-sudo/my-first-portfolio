import React from "react";
import { useStyles } from "./style";
import {
  Card,
  Subtitle,
  TextProperty,
  Text,
  SocialIcon,
  ButtonLink,
} from "../../../../components";
import { Icon } from "../../../../resources";
import { projects } from "../../../../config";
import { TECHNOLOGIES } from "../../../../constants";
import { ProjectCardAnimation } from "../../animations/ProjectCardAnimation/ProjectCardAnimation";
import { Functionalities, Images, Technologies } from "../../Projects";

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
                    <Functionalities
                      project={project}
                      projectIndex={projectIndex}
                      classes={classes}
                    />
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
                    <Technologies
                      project={project}
                      projectIndex={projectIndex}
                    />
                  </div>
                </div>
                <div className={classes.rightSection}>
                  <div className={classes.images}>
                    <Images project={project} projectIndex={projectIndex} />
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
