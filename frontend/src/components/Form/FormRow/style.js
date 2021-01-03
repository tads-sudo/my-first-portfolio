import { createUseStyles } from "react-jss";
import { SCREEN_TABLET } from "../../../theme";

export const useStyles = createUseStyles({
  formRow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    width: "100%",
  },
  [`@media (min-width:${SCREEN_TABLET.MIN}px)`]: {
    formRow: {
      flexDirection: "row",
    },
  },
});
