import React, { useState } from "react";
import { useStyles } from "./style";
import { FilterSection, ProjectFooter, ProjectSection } from "./components";
import { TECHNOLOGIES } from "../../constants";
import { TopButton } from "../../components";
import { PageAnimation } from "./animations";

export const ProjectsView = () => {
  const classes = useStyles();
  const [filterValue, setFilterValue] = useState(TECHNOLOGIES.SHOWALL.id);

  return (
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
  );
};
