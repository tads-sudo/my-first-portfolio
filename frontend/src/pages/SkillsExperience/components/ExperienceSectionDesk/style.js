import { createUseStyles } from "react-jss";
import { SCREEN_DESKTOP, color } from "../../../../theme";

export const useStyles = createUseStyles({
  timeline: {
    display: "none",
  },
  timelineBody: {
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 5%)",
    width: "100%",
    borderRadius: "0 8px 8px 0",
    borderBottom: "1px solid #2f2f2b",
    marginLeft: "15%",
    "&:after": {
      content: '""',
      width: "3px",
      height: "100%",
      backgroundColor: color.PRIMARY,
      position: "absolute",
      left: "-4px",
      top: "0",
    },
  },
  timelineItem: {
    position: "relative",
    "&:after": {
      content: '""',
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      border: "3px solid #ff7129",
      backgroundColor: color.SECONDARY,
      position: "absolute",
      left: "-15px",
      top: "4px",
      zIndex: "1",
    },
  },
  time: {
    position: "absolute",
    left: "-170px",
    top: "8px",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "230px 1fr",
    columnGap: "90px",
    margin: "30px 40px",
  },
  leftContent: {
    display: "flex",
    flexDirection: "column",
  },
  rightContent: {
    display: "flex",
    flexDirection: "column",
  },
  rightContentSubtitle: {
    marginBottom: "15px",
  },
  itemss: {
    display: "grid",
    rowGap: "10px",
  },
  itemm: {
    display: "grid",
    gridTemplateColumns: "24px 1fr",
    gridColumnGap: "10px",
  },
  cti: {
    marginBottom: "60px",
  },
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    timeline: {
      display: "flex",
    },
  },
});
