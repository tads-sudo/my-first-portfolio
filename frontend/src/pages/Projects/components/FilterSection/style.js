import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP } from "../../../../theme";

export const useStyles = createUseStyles({
  // HEADING 3
  heading3: {
    marginBottom: "20px",
  },
  //   FILTER SECTION
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
    // HEADING 3
    heading3: {
      marginBottom: "30px",
    },
    //   FILTER SECTION
    filterCard: {
      marginLeft: "20px",
      marginBottom: "30px",
    },
  },
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    //   FILTER SECTION
    filterCard: {
      marginLeft: "0",
    },
  },
});
