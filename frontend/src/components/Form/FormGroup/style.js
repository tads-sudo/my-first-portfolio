import { createUseStyles } from "react-jss";
import { SCREEN_TABLET } from "../../../theme";

export const useStyles = createUseStyles({
  formGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0",
    width: "100%",
    marginBottom: "30px",
  },
  [`@media (min-width: ${SCREEN_TABLET.MIN}px)`]: {
    formGroup: {
      '[class*="formRow"] &:not(:first-of-type)': {
        marginLeft: "24px",
      },
    },
  },
});
