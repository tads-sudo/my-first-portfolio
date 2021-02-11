import { createUseStyles } from "react-jss";
import { SCREEN_DESKTOP } from "../../../../theme";

export const useStyles = createUseStyles({
  backgroundElement: {
    display: "none",
  },
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    backgroundElement: {
      display: "flex",
      width: "20%",
      height: "20%",
      position: "absolute",
      top: "80%",
      left: "80%",
      zIndex: "-1",
    },
  },
});
