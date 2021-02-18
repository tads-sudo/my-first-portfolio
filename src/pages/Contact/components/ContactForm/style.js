import { createUseStyles } from "react-jss";
import { SCREEN_DESKTOP, SCREEN_TABLET } from "../../../../theme";

export const useStyles = createUseStyles({
  formWrapper: {
    padding: "30px",
    background: "rgba(255, 255, 255, 0.03)",
    borderRadius: "10px",
  },
  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {
    formWrapper: {
      padding: "45px",
      background: "rgba(255, 255, 255, 0.03)",
      borderRadius: "10px",
    },
  },
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    formWrapper: {
      padding: "55px",
      boxShadow: "0 8px 14px rgba(0,0,0,0.2)",
    },
  },
});
