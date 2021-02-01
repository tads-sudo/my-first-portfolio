import React, { useState } from "react";
import { useStyles } from "./style";
import { FilterSection, ProjectFooter, ProjectSection } from "./components";
import { TECHNOLOGIES } from "../../constants";
import { motion } from "framer-motion";
import { TopButton } from "../../components";

export const ProjectsView = () => {
  const classes = useStyles();
  const [filterValue, setFilterValue] = useState(TECHNOLOGIES.SHOWALL.id);

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
        initial="initiial"
        animate="in"
        exit="out"
        variants={pageAnimation}
      >
        <div className={classes.container}>
          <FilterSection setFilterValue={setFilterValue} />
          <ProjectSection
            filterValue={filterValue}
            setFilterValue={setFilterValue}
          />
          <ProjectFooter />
        </div>
      </motion.section>
      <TopButton />
    </>
  );
};
