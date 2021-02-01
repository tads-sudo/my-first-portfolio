import React from "react";
import { useStyles } from "./style";
import {
  SkillsSection,
  ExperieceSections,
  ExperienceSectionDesk,
  SkillsExperienceFooter,
} from "./components";
import { motion } from "framer-motion";
import { TopButton } from "../../components";

export const SkillsExperienceView = () => {
  const classes = useStyles();

  const pageAnimation = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <>
      <motion.section
        initial="initial"
        animate="in"
        exit="out"
        variants={pageAnimation}
      >
        <div className={classes.container}>
          <SkillsSection />
          <ExperieceSections />
          <ExperienceSectionDesk />
          <SkillsExperienceFooter />
        </div>
      </motion.section>
      <TopButton />
    </>
  );
};
