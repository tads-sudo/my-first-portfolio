import { createUseStyles } from "react-jss";
import { SCREEN_DESKTOP, SCREEN_TABLET } from "../../../theme";

export const useStyles = createUseStyles({
  svg: {
    width: "86px",
    height: "60px",
  },
  navLink: {
    width: "86px",
    height: "60px",
    position: "absolute",
    top: "10px",
    left: "16px",
  },
  [`@media (min-width: ${SCREEN_TABLET.MIN}px)`]: {
    svg: {
      width: "94px",
      height: "60px",
    },
    navLink: {
      width: "94px",
      height: "60px",
      left: "24px",
    },
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    svg: {
      width: "86px",
      height: "60px",
    },
    navLink: {
      width: "86px",
      height: "60px",
      left: "48px",
    },
  },
});
