import { createUseStyles } from "react-jss";
import { color } from "../../../theme";

export const useStyles = createUseStyles({
  topbarContainer: {
    position: "fixed",
    zIndex: "999",
    width: "100%",
    height: "100%",
    background: color.SECONDARY,
    display: "grid",
    alignItems: "center",
  },
});
