import { createUseStyles } from "react-jss";
import { SCREEN_DESKTOP } from "../../theme";

export const useStyles = createUseStyles({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    border: "none",
    cursor: "pointer",
    zIndex: 1000,
    width: "60px",
    height: "60px",
    padding: "0",
    background: "transparent",
  },
  [`@media (min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    button: {
      display: "none",
    },
  },
});
