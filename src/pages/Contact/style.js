import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP } from "../../theme";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    rowGap: "24px",
    flexDirection: "column",
    padding: "20px",
  },
  contactForm: {
    width: "100%",
    height: "100%",
  },
  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {
    container: {
      display: "grid",
      rowGap: "0",
      gridTemplateRows: "auto 24px",
      padding: "30px 50px",
      minHeight: "calc(100vh - 140px)",
      width: "calc(100% - 100px)",
    },
    contactForm: {
      width: "fit-content",
      height: "fit-content",
      alignSelf: "center",
      justifySelf: "center",
    },
  },
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    container: {
      padding: "30px 48px",
      minHeight: "calc(100vh - 140px)",
      width: "calc(100% - 96px)",
      gridTemplateRows: "auto 48px",
      rowGap: "24px",
    },
  },
});
