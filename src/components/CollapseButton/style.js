import { createUseStyles } from "react-jss";
import { color, SCREEN_DESKTOP } from "../../theme";

export const useStyles = createUseStyles({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    border: "none",
    padding: "0",
    borderRadius: "8px",
    cursor: "pointer",
    width: "40px",
    height: "40px",
    background: color.SECONDARY,
  },
  [`@media (min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    button: {
      width: "60px",
      height: "60px",
    },
  },
});
