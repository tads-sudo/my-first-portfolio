import { createUseStyles } from "react-jss";
import { SNOW_DRIFT, SCREEN_TABLET, SCREEN_DESKTOP } from "../../../theme";

export const useStyles = createUseStyles({
  navItem: {
    color: SNOW_DRIFT,
    fontFamily: "Roboto, sans-serif",
    fontSize: "2.0625em",
    fontWeight: "bold",
    letterSpacing: "0.061875rem",
    lineHeight: "120%",
  },
  [`@media (min-width: ${SCREEN_TABLET.MIN}px)`]: {
    navItem: {
      fontSize: "2.875em",
      letterSpacing: "0.0575rem",
    },
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    navItem: {
      fontSize: "1em",
      letterSpacing: "0.005em",
      lineHeight: "140%",
    },
  },
});
