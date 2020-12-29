import { createUseStyles } from "react-jss";
import { SCREEN_DESKTOP } from "../../../theme";

export const useStyles = createUseStyles({
  items: {
    display: "none",
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    items: {
      display: "flex",
      alignItems: "center",
    },
  },
});
