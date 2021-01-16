import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP, color } from "../../../../theme";

export const useStyles = createUseStyles({
  heading3: {
    marginBottom: "20px",
  },
  experienceContainer: {
    marginLeft: "6px",
  },
  logoAndTitle: {
    display: "flex",
    flexDirection: "column",
  },
  companyMobLogo: {
    display: "flex",
    marginBottom: "20px",
  },
  companyTabDeskLogo: {
    display: "none",
  },
  cardTitle: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  companyName: {
    display: "none",
  },
  companyNameTab: {
    display: "flex",
  },
  companyNameDesk: {
    display: "none",
  },
  workTitleMobileTab: {
    display: "flex",
  },
  workTitleDesk: {
    display: "none",
  },
  thousandmindsMobTab: {
    marginBottom: "20px",
  },
  ctiMobTab: {
    marginBottom: "50px",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  items: {
    display: "grid",
    rowGap: "10px",
  },
  item: {
    display: "grid",
    gridTemplateColumns: "24px 1fr",
    gridColumnGap: "10px",
  },
  dateInCard: {
    display: "flex",
  },
  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {
    heading3: {
      marginBottom: "30px",
    },
    experienceContainer: {
      marginLeft: "11px",
    },
    logoAndTitle: {
      display: "flex",
      flexDirection: "row",
      marginBottom: "24px",
    },
    companyMobLogo: {
      display: "none",
    },
    companyTabDeskLogo: {
      display: "flex",
      width: "fit-content",
      marginRight: "15px",
    },
    cardTitle: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridColumnGap: "10px",
      alignItems: "center",
      justifyItems: "center",
      marginBottom: "0",
    },
    companyName: {
      display: "flex",
      marginRight: "10px",
    },
    thousandmindsMobTab: {
      marginBottom: "30px",
    },
    ctiMobTab: {
      marginBottom: "80px",
    },
    cardBody: {
      marginBottom: "24px",
    },
  },
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    thousandmindsMobTab: {
      display: "none",
    },
    ctiMobTab: {
      display: "none",
    },
  },
});
