import React from "react";
import { useStyles } from "./style";
import {
  SkillsSection,
  ExperieceSections,
  ExperienceSectionDesk,
  SkillsExperienceFooter,
} from "./components";
import { TopButton } from "../../components";
import { PageAnimation } from "./animations";

export const SkillsExperienceView = () => {
  const classes = useStyles();

  return (
    <PageAnimation>
      <div className={classes.container}>
        <SkillsSection />
        <ExperieceSections />
        <ExperienceSectionDesk />
        <SkillsExperienceFooter />
      </div>
      <TopButton />
    </PageAnimation>
  );
};
