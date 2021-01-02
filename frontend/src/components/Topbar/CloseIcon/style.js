import { createUseStyles } from "react-jss";
import { SCREEN_DESKTOP } from "../../../theme";

export const useStyles = createUseStyles({
  closeIcon: {
    width: "68px",
    height: "60px",
    cursor: "pointer",
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    closeIcon: {
      display: "none",
    },
  },
});
