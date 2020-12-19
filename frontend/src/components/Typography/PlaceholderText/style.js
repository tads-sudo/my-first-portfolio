import { createUseStyles } from "react-jss";
import { BANDICOOT } from "../../../theme";

export const useStyles = createUseStyles({
  placeholder: (props) => ({
    color: BANDICOOT,
    fontFamily: "Roboto, sans-serif",
    fontSize: "1em",
    fontWeight: 400,
    letterSpacing: "0",
    lineHeight: "140%",
  }),
});
