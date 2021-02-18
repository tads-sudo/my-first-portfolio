import { createUseStyles } from "react-jss";
import { SCREEN_DESKTOP } from "../../../../theme";

export const useStyles = createUseStyles({
  backgroundElement: {
    display: "none",
  },
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    backgroundElement: {
      display: "flex",
      width: "48%",
      height: "80%",
      position: "absolute",
      top: "6%",
      left: "-14%",
      zIndex: "-1",
    },
  },
});
