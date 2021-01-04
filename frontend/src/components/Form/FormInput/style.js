import { createUseStyles } from "react-jss";
import Color from "color";
import { color } from "../../../theme";

export const useStyles = createUseStyles({
  formInput: {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 16px",
    flex: "1",
    background: "rgba(255, 255, 255, 0.05)",
    boxShadow: ({ isValid }) => {
      if (isValid === null) {
        return;
      }
      return `0 0 0 1px ${isValid ? color.SUCCESS : color.ERROR}`;
    },
    border: "none",
    borderRadius: "8px",
    fontFamily: "Roboto, sans-serif",
    fontSize: "1em",
    fontWeight: "400",
    letterSpacing: "0.005em",
    lineHeight: "140%",
    color: color.TERTIARY,
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      background: Color("rgba(255, 255, 255, 0.05)")
        .mix(Color(color.SECONDARY), 0.25)
        .hex(),
      transition: "all 0.2s ease-in-out",
    },
    "&:focus": {
      outline: "none",
      boxShadow: `0 0 0 1px ${color.PRIMARY}`,
    },
  },
});
