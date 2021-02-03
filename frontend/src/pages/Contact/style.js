import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP } from "../../theme";

export const useStyles = createUseStyles({
  container: {
    display: "grid",
    rowGap: "30px",
    flexDirection: "column",
    padding: "20px",
  },
  contactForm: {
    width: "fit-content",
    height: "fit-content",
    alignSelf: "center",
    justifySelf: "center",
  },
  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {
    container: {
      rowGap: "0",
      gridTemplateRows: "auto 24px",
      padding: "30px 50px",
      height: "calc(100vh - 140px)",
      width: "calc(100% - 100px)",
    },
  },
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    container: {
      padding: "30px 48px",
      width: "calc(100% - 96px)",
    },
  },
});
