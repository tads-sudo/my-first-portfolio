import { createUseStyles } from "react-jss";
import { SCREEN_DESKTOP } from "../../../theme";

export const useStyles = createUseStyles({
  items: {
    display: "none",
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    items: {
      display: "flex",
      columnGap: "2rem",
      alignItems: "center",
      listStyle: "none",
      textAlign: "center",
    },
  },
});
