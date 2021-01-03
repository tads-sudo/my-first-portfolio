import { createUseStyles } from "react-jss";
import { color } from "../../../theme";

export const useStyles = createUseStyles({
  formTextArea: {
    boxSizing: "border-box",
    resize: "none",
    width: "100%",
    padding: "12px 16px",
    background: "rgba(255, 255, 255, 0.05)",
    border: "none",
    borderRadius: "8px",
    fontFamily: "Roboto, sans-serif",
    fontSize: "1em",
    fontWeight: "400",
    letterSpacing: "0.005em",
    lineHeight: "140%",
    color: color.TERTIARY,
    "&:focus": {
      outline: "none",
      boxShadow: `0 0 0 1px ${color.PRIMARY}`,
    },
  },
});
