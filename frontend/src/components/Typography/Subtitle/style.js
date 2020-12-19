import { createUseStyles } from "react-jss";
import { SNOW_DRIFT, SCREEN_TABLET, SCREEN_DESKTOP } from "../../../theme";

export const useStyles = createUseStyles({
  subtitle: (props) => ({
    color: SNOW_DRIFT,
    fontFamily: "Roboto, sans-serif",
    fontSize: "1.1875em",
    fontWeight: props.bold ? "bold" : "500",
    letterSpacing: "0",
    lineHeight: "120%",
  }),
  [`@media (min-width: ${SCREEN_TABLET.MIN}px)`]: {
    subtitle: (props) => ({
      fontSize: "1.25em",
      fontWeight: props.bold ? "bold" : "400",
      letterSpacing: "0.001875em",
    }),
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    subtitle: (props) => ({
      fontSize: "1.375em",
      letterSpacing: "0.0020625em",
    }),
  },
});
