import { createUseStyles } from "react-jss";
import { SCREEN_TABLET } from "../../theme";

export const useStyles = createUseStyles({
  companyLogo: {
    width: "100%",
    height: "100%",
  },
  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {
    companyLogo: ({ width, height }) => ({
      width: `${width.toString()}px`,
      height: `${height.toString()}px`,
    }),
  },
});
