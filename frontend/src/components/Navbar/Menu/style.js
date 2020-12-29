import { createUseStyles } from "react-jss";
import { color, SCREEN_TABLET, SCREEN_DESKTOP } from "../../../theme";

export const useStyles = createUseStyles({
  menu: {
    color: color.TERTIARY,
    width: "68px",
    height: "60px",
  },
  [`@media (min-width: ${SCREEN_TABLET.MIN}px)`]: {
    menu: {
      width: "68px",
      height: "60px",
    },
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    menu: {
      display: "none",
    },
  },
});
