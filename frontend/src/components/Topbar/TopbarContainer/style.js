import { createUseStyles } from "react-jss";
import { color } from "../../../theme";

export const useStyles = createUseStyles({
  topbarContainer: ({ isOpen }) => ({
    position: "fixed",
    zIndex: "999",
    width: "100%",
    height: "100%",
    background: color.SECONDARY,
    display: "grid",
    alignItems: "center",
    left: "0",
    transition: "0.3s ease-in-out",
    bottom: isOpen ? "0" : "100%",
  }),
});
