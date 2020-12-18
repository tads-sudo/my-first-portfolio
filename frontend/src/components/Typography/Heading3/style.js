import { createUseStyles } from "react-jss";
import { SNOW_DRIFT, SCREEN_TABLET, SCREEN_DESKTOP } from "../../../theme";

export const useStyles = createUseStyles({
  heading: {
    color: SNOW_DRIFT,
    fontFamily: "Roboto, sans-serif",
    fontSize: "1.4375em",
    fontWeight: "500",
    letterSpacing: "0.014375em",
    lineHeight: "135%",
  },
  [`@media (min-width: ${SCREEN_TABLET.MIN}px)`]: {
    heading: {
      fontSize: "1.6875em",
      fontWeight: "bold",
      letterSpacing: "-0.03375em",
      lineHeight: "125%",
    },
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    heading: {
      fontSize: "1.9375em",
      fontWeight: "bold",
      letterSpacing: "0.0775em",
      lineHeight: "110%",
    },
  },
});
