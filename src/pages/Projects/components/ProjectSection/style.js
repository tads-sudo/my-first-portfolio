import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP } from "../../../../theme";

export const useStyles = createUseStyles({
  projectsCard: {
    marginLeft: "6px",
    marginBottom: "30px",
  },
  item: {
    display: "grid",
    gridTemplateColumns: "24px auto",
  },
  items: {
    marginBottom: "25px",
  },
  buttonLink: {
    marginBottom: "12px",
  },
  technologies: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: "5px",
    rowGap: "10px",
  },
  cardSection: {
    display: "flex",
    flexDirection: "column",
  },
  leftSection: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",
  },
  rightSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    rowGap: "24px",
  },
  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {
    projectsCard: {
      marginLeft: "20px",
    },
    buttonLink: {
      marginBottom: "24px",
    },
  },
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    projectsCard: {
      marginLeft: "0",
    },
    cardSection: {
      display: "grid",
      gridTemplateColumns: "auto auto",
      columnGap: "200px",
    },
    leftSection: {
      marginBottom: "0",
    },
  },
});
