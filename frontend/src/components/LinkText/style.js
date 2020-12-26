import { createUseStyles } from "react-jss";
import { color } from "../../theme";
export const useStyles = createUseStyles({
  linkText: (props) => ({
    fontFamily: "Roboto, sans-serif",
    fontSize: "1em",
    fontWeight: "bold",
    letterSpacing: "0.005em",
    lineHeight: "140%",
    color: color[props.colorProps],
    textDecoration: "underline",
  }),
});
