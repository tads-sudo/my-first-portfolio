import { createUseStyles } from "react-jss";
import { SCREEN_DESKTOP } from "../../theme";

export const useStyles = createUseStyles({
  footer: {
    backgroundColor: "rgba(255, 255, 255, 5%)",
    borderRadius: "10px",
    padding: "30px",
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    footer: {
      padding: "30px 78px",
    },
  },
});
