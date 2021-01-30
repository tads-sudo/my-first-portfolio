import { createUseStyles } from "react-jss";
import { color, SCREEN_TABLET, SCREEN_DESKTOP } from "../../../theme";

export const useStyles = createUseStyles({
  navLink: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "2.0625em",
    fontWeight: "bold",
    letterSpacing: "0.061875rem",
    lineHeight: "120%",
    color: color.TERTIARY,
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    padding: "0 25px",
    height: "100%",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    "&:hover": {
      padding: "16px 25px",
      borderRadius: "20px",
      background: "rgba(0, 0, 0, 35%)",
      transition: "0.3s ease-in-out",
    },
  },
  activeNavLinks: {
    transition: "0.3s ease-in-out",
    padding: "16px 25px",
    borderRadius: "20px",
    background: "rgba(0, 0, 0, 35%)",
  },
  [`@media (min-width: ${SCREEN_TABLET.MIN}px)`]: {
    navLink: {
      fontSize: "2.875em",
      letterSpacing: "0.0575rem",
    },
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    navLink: {
      fontSize: "1em",
      letterSpacing: "0.005em",
      lineHeight: "140%",
    },
  },
});
