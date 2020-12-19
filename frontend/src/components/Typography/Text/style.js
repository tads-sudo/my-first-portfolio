import { createUseStyles } from "react-jss";
import { SNOW_DRIFT } from "../../../theme";

export const useStyles = createUseStyles({
  text: (props) => ({
    color: SNOW_DRIFT,
    fontFamily: "Roboto, sans-serif",
    fontSize: "1em",
    fontWeight: props.bold ? "bold" : "400",
    letterSpacing: "0.005em",
    lineHeight: "140%",
  }),
});
