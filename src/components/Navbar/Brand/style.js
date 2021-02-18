import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP } from "../../../theme";

export const useStyles = createUseStyles({
  svg: {
    width: "86px",
    height: "60px",
  },
  [`@media (min-width: ${SCREEN_TABLET.MIN}px)`]: {
    svg: {
      width: "94px",
      height: "60px",
    },
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    svg: {
      width: "86px",
      height: "60px",
    },
  },
});
