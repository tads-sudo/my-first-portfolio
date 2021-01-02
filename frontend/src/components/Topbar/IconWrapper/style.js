import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP } from "../../../theme";

export const useStyles = createUseStyles({
  iconWrapper: {
    position: "absolute",
    padding: "0",
    height: "60px",
    top: "10px",
    right: "16px",
    background: "transparent",
    outline: "none",
    borderStyle: "none",
  },
  [`@media (min-width: ${SCREEN_TABLET.MIN}px)`]: {
    iconWrapper: {
      right: "24px",
    },
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    iconWrapper: {
      display: "none",
    },
  },
});
