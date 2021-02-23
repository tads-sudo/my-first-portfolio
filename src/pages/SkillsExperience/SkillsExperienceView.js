import React from "react";
import { useStyles } from "./style";
import {
  SkillsSection,
  ExperieceSections,
  ExperienceSectionDesk,
  SkillsExperienceFooter,
} from "./components";
import { Meta, TopButton } from "../../components";
import { PageAnimation } from "./animations";
import { meta } from "../../config";

export const SkillsExperienceView = () => {
  const classes = useStyles();

  return (
    <>
      <Meta title={meta.SKILLSEXPERIENCE.TITLE} />
      <PageAnimation>
        <div className={classes.container}>
          <SkillsSection />
          <ExperieceSections />
          <ExperienceSectionDesk />
          <SkillsExperienceFooter />
        </div>
        <TopButton />
      </PageAnimation>
    </>
  );
};

export default SkillsExperienceView;
