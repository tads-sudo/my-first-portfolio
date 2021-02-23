import React, { useState } from "react";
import { useStyles } from "./style";
import { FilterSection, ProjectFooter, ProjectSection } from "./components";
import { TECHNOLOGIES } from "../../constants";
import { Meta, TopButton } from "../../components";
import { PageAnimation } from "./animations";
import { meta } from "../../config";

export const ProjectsView = () => {
  const classes = useStyles();
  const [filterValue, setFilterValue] = useState(TECHNOLOGIES.SHOWALL.id);

  return (
    <>
      <Meta title={meta.PROJECTS.TITLE} />
      <PageAnimation>
        <div className={classes.container}>
          <FilterSection setFilterValue={setFilterValue} />
          <ProjectSection
            filterValue={filterValue}
            setFilterValue={setFilterValue}
          />
          <ProjectFooter />
        </div>
        <TopButton />
      </PageAnimation>
    </>
  );
};

export default ProjectsView;
