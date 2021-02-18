import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP } from "../../theme";

export const useStyles = createUseStyles({
  card: {
    backgroundColor: "rgba(255, 255, 255, 5%)",
    borderRadius: "10px",
    padding: "20px",
  },
  [`@media (min-width: ${SCREEN_TABLET.MIN}px)`]: {
    card: {
      padding: "30px",
    },
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {},
});
