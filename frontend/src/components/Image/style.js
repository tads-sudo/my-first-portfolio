import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP } from "../../theme";

export const useStyles = createUseStyles({
  image: ({ widthM, heightM }) => ({
    objectFit: "contain",
    width: widthM,
    height: heightM,
  }),
  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {
    image: ({ widthT, heightT }) => ({
      width: widthT,
      height: heightT,
    }),
  },
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    image: ({ widthD, heightD }) => ({
      width: widthD,
      height: heightD,
    }),
  },
});
