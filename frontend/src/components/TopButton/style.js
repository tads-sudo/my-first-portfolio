import { createUseStyles } from "react-jss";
import { color, SCREEN_TABLET, SCREEN_DESKTOP } from "../../theme";

export const useStyles = createUseStyles({
  button: {
    display: "block",
    backgroundColor: color.PRIMARY,
    border: "0",
    borderRadius: "50px",
    outline: "none",
    color: color.SECONDARY,
    position: "fixed",
    bottom: "1rem",
    right: "0.7rem",
    height: "60px",
    width: "60px",
  },
  buttonNone: {
    display: "none",
  },
  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {
    button: {
      bottom: "1.5rem",
      right: "1.5rem",
    },
  },
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    button: {
      bottom: "2rem",
      right: "2rem",
    },
  },
});
