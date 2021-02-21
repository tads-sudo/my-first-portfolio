import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP } from "../../theme";

export const useStyles = createUseStyles({
  container: {
    padding: "18px 30px 40px 24px",
  },

  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {
    container: {
      padding: "40px 55px 40px 35px",
    },
  },

  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    container: {
      padding: "40px 55px",
    },
  },
});
