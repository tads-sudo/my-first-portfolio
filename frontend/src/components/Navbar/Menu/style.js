import { createUseStyles } from "react-jss";
import { color, SCREEN_DESKTOP } from "../../../theme";

export const useStyles = createUseStyles({
  menuIcon: {
    color: color.TERTIARY,
    width: "68px",
    height: "60px",
    cursor: "pointer",
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    menuIcon: {
      display: "none",
    },
  },
});
