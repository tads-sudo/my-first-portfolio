import { createUseStyles } from "react-jss";
import { SNOW_DRIFT, SCREEN_TABLET } from "../../../theme";

export const useStyles = createUseStyles({
  smallText: {
    color: SNOW_DRIFT,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    fontSize: "0.75em",
    letterSpacing: "0.0075em",
    lineHeight: "135%",
  },
  [`@media (min-width: ${SCREEN_TABLET.MIN}px)`]: {
    smallText: {
      fontWeight: "500",
      fontSize: "0.875em",
      letterSpacing: "0",
      lineHeight: "140%",
    },
  },
});
