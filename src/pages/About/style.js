import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP } from "../../theme";

export const useStyles = createUseStyles({
  container: {
    display: "grid",
    padding: "0 40px 30px",
    width: "calc(100% - 80px)",
    height: "calc(100vh - 110px)",
    gridTemplateRows: "auto 24px",
  },
  circle: {
    display: "none",
  },
  headingsBallChair: {
    display: "flex",
  },
  ballChair: {
    display: "none",
  },
  headings: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
  },
  icons: {
    display: "flex",
    width: "90%",
    height: "24px",
    alignSelf: "end",
    justifySelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  [`@media (min-width: ${SCREEN_TABLET.MIN}px)`]: {
    container: {
      padding: "0 50px 30px",
      width: "calc(100% - 100px)",
      gridTemplateRows: "auto auto auto",
    },
    circle: {
      display: "flex",
      height: "100px",
      alignSelf: "end",
      justifySelf: "end",
      marginRight: "36px",
    },
    headings: {
      marginTop: "86px",
      alignSelf: "flex-start",
      width: "549px",
    },
    icons: {
      width: "50%",
    },
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    container: {
      padding: "0 70px 30px",
      width: "calc(100% - 140px)",
      gridTemplateRows: "auto auto auto",
    },
    headingsBallChair: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    ballChair: {
      display: "flex",
    },
    headings: {
      marginTop: "27px",
      width: "620px",
    },
    icons: {
      width: "25%",
    },
  },
});
