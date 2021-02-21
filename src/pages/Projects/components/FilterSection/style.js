import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP } from "../../../../theme";

export const useStyles = createUseStyles({
  heading3: {
    marginBottom: "20px",
  },
  filterCard: {
    marginLeft: "6px",
    marginBottom: "25px",
  },
  filterRow1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },
  categories: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: "10px",
    rowGap: "10px",
  },

  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {
    heading3: {
      marginBottom: "30px",
    },
    filterCard: {
      marginLeft: "20px",
      marginBottom: "30px",
    },
  },
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    filterCard: {
      marginLeft: "0",
    },
  },
});
