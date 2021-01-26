import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP } from "../../../../theme";

export const useStyles = createUseStyles({
  footerSubtitleLineBreak: {
    display: "none",
  },
  footer: {
    marginLeft: "6px",
  },
  footerContainer: {
    display: "flex",
  },
  footerColumn1: {
    display: "flex",
    flexDirection: "column",
  },
  footerColumn2: {
    display: "none",
  },
  footerrow1: {
    display: "flex",
    marginBottom: "20px",
  },
  footerrow2: {
    display: "flex",
    justifyContent: "space-between",
  },
  footerSocialMedia: {
    display: "none",
  },
  footerIconText: {
    display: "none",
  },
  socialMediaRow1: {
    display: "none",
  },
  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {
    footerSubtitleLineBreak: {
      display: "flex",
    },
    footer: {
      marginLeft: "11px",
    },
    footerContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    footerColumn1: {
      display: "flex",
      flexDirection: "column",
    },
    footerColumn2: {
      display: "flex",
    },
    footerSocialMedia: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    footerIconText: {
      display: "grid",
      gridTemplateColumns: "24px 1fr",
      columnGap: "20px",
      alignItems: "center",
    },
    socialMediaRow1: {
      display: "flex",
      marginBottom: "15px",
    },
  },
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    footer: {
      marginLeft: "0",
    },
    socialMediaRow1: {
      marginBottom: "30px",
    },
  },
});
