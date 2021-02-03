import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP } from "../../../../theme";

export const useStyles = createUseStyles({
  icons: {
    display: "flex",
    width: "75%",
    height: "24px",
    alignSelf: "end",
    justifySelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconTextRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: "10px",
  },
  text: {
    display: "none",
  },
  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {
    icons: {
      width: "68%",
    },
    text: {
      display: "flex",
      textDecoration: "none",
    },
  },
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    icons: {
      width: "38%",
      justifySelf: "center",
    },
  },
});
