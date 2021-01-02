import { createUseStyles } from "react-jss";
import { SCREEN_DESKTOP, SCREEN_TABLET } from "../../../theme";

export const useStyles = createUseStyles({
  topbarMenu: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "repeat(4, 40px)",
    gridRowGap: "60px",
    textAlign: "center",
    listStyle: "none",
    paddingInlineStart: "0",
  },
  [`@media (min-width: ${SCREEN_TABLET.MIN}px)`]: {
    topbarMenu: {
      gridTemplateRows: "repeat(4, 100px)",
      gridRowGap: "100px",
    },
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    topbarMenu: {
      display: "none",
    },
  },
});
