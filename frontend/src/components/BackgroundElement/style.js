import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP } from "../../theme";

export const useStyles = createUseStyles({
  backgroundElement: {
    width: "auto",
    height: "auto",
    position: "absolute",
    top: "15%",
    left: "-1%",
    zIndex: "-1",
  },
  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {
    backgroundElement: {
      width: "72.5%",
      height: "704px",
      top: "12%",
      left: "-5%",
    },
  },
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    backgroundElement: {
      width: "48%",
      height: "80%",
      top: "8%",
    },
  },
});
