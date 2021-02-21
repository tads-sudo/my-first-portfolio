import { createUseStyles } from "react-jss";
import { color, SCREEN_DESKTOP, SCREEN_TABLET } from "../../../theme";

export const useStyles = createUseStyles({
  topbarLink: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    fontSize: "1.875em",
    letterSpacing: "0.061875em",
    lineHeight: "120%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "0.2s ease-in-out",
    color: color.TERTIARY,
    cursor: "pointer",
  },
  activeNavLink: {
    color: color.PRIMARY,
  },
  [`@media (min-width: ${SCREEN_TABLET.MIN}px)`]: {
    topbarLink: {
      fontSize: "2.875em",
      letterSpacing: "0.0575em",
    },
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    topbarLink: {
      display: "none",
    },
  },
});
