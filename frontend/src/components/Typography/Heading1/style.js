import { createUseStyles } from "react-jss";
import { SNOW_DRIFT, SCREEN_TABLET, SCREEN_DESKTOP } from "../../../theme";

export const useStyles = createUseStyles({
  heading: {
    color: SNOW_DRIFT,
    fontSize: "2.0625em",
    lineHeight: "110%",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    letterSpacing: "0%",
  },
  [`@media (min-width: ${SCREEN_TABLET.MIN}px)`]: {
    heading: {
      fontSize: "2.875em",
      letterSpacing: "2%",
      lineHeight: "120%",
    },
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    heading: {
      fontSize: "3.8125em",
      lineHeight: "120%",
    },
  },
});
