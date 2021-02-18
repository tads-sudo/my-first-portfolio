import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP } from "../../../../theme";

export const useStyles = createUseStyles({
  heading3: {
    marginBottom: "20px",
  },
  skillsContainer: {
    display: "grid",
    rowGap: "20px",
    marginLeft: "6px",
    marginBottom: "50px",
  },
  rowSkills: {
    gridTemplateColumns: "repeat(2, 1fr)",
    display: "grid",
    gridColumnGap: "20px",
    rowGap: "20px",
  },
  skill: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {
    heading3: {
      marginBottom: "30px",
    },
    skillsContainer: {
      display: "grid",
      rowGap: "30px",
      marginLeft: "20px",
    },
    rowSkills: {
      gridTemplateColumns: "repeat(4, 1fr)",
      gridColumnGap: "30px",
      rowGap: "30px",
    },
  },
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    // SKILLS SECTION
    skillsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridColumnGap: "30px",
      rowGap: "30px",
      marginLeft: "0",
    },
  },
});
