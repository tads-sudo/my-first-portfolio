import React from "react";
import { useStyles } from "./style";
import {
  SkillsSection,
  ExperieceSections,
  ExperienceSectionDesk,
  SkillsExperienceFooter,
} from "./components";

export const SkillsExperienceView = () => {
  const classes = useStyles();
  return (
    <section>
      <div className={classes.container}>
        <SkillsSection />
        <ExperieceSections />
        <ExperienceSectionDesk />
        <SkillsExperienceFooter />
      </div>
    </section>
  );
};
