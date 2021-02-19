import React, { useState } from "react";
import { useStyles } from "./style";
import { AnimatePresence } from "framer-motion";
import {
  Card,
  Subtitle,
  CollapseButton,
  Heading3,
} from "../../../../components";
import { Categories } from "../../Projects";
import {
  CategoriesAnimation,
  FilterCardAnimation,
  FilterRow1Animation,
  Heading3Animation,
} from "../../animations";

export const FilterSection = ({ setFilterValue }) => {
  const classes = useStyles();
  const [isShow, setIsShow] = useState(true);

  const toggle = () => {
    setIsShow((currentState) => {
      return !currentState;
    });
  };

  return (
    <>
      <Heading3Animation
        className={classes.heading3}
        transition={{ delay: "0.2" }}
      >
        <Heading3>PROJECTS</Heading3>
      </Heading3Animation>
      <FilterCardAnimation className={classes.filterCard}>
        <Card>
          <FilterRow1Animation className={classes.filterRow1} isShow={isShow}>
            <Subtitle>Filter by category</Subtitle>
            <CollapseButton
              toggle={toggle}
              aria-label="collapse-button"
              whileHover={{ scale: 1.05 }}
              whileFocus={{
                boxShadow: "0 0 0 2px rgba(255,113,41,1)",
              }}
            />
          </FilterRow1Animation>
          <AnimatePresence initial={false}>
            {isShow && (
              <CategoriesAnimation className={classes.categories}>
                <Categories setFilterValue={setFilterValue} />
              </CategoriesAnimation>
            )}
          </AnimatePresence>
        </Card>
      </FilterCardAnimation>
    </>
  );
};
