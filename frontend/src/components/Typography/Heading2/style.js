import { createUseStyles } from "react-jss";
import { SNOW_DRIFT, SCREEN_TABLET, SCREEN_DESKTOP } from "../../../theme";

export const useStyles = createUseStyles({
  heading: {
    color: SNOW_DRIFT,
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1.625em",
    fontWeight: "500",
    letterSpacing: "-0.0325em",
    lineHeight: "125%",
    margin: "0",
  },
  [`@media (min-width: ${SCREEN_TABLET.MIN}px)`]: {
    heading: {
      fontSize: "2.25em",
      fontWeight: "bold",
      letterSpacing: "0.0225em",
      lineHeight: "125%",
    },
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    heading: {
      fontSize: "2.75em",
      fontWeight: "bold",
      letterSpacing: "0.0275em",
      lineHeight: "120%",
    },
  },
});
