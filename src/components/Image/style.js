import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP } from "../../theme";

export const useStyles = createUseStyles({
  image: ({ widthM, heightM }) => ({
    objectFit: "contain",
    width: widthM,
    height: heightM,
  }),
  loader: ({ isLoading }) => ({
    display: isLoading ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
    height: "150px",
  }),
  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {
    image: ({ widthT, heightT }) => ({
      width: widthT,
      height: heightT,
    }),
    loader: ({ isLoading }) => ({
      display: isLoading ? "flex" : "none",
      justifyContent: "center",
      alignItems: "center",
      width: "300px",
      height: "300px",
    }),
  },
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    image: ({ widthD, heightD }) => ({
      width: widthD,
      height: heightD,
    }),
  },
});
