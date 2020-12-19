import { createUseStyles } from "react-jss";
import { color } from "../../../theme";
export const useStyles = createUseStyles({
  text: (props) => ({
    color: color[props.colorProps],
  }),
});
