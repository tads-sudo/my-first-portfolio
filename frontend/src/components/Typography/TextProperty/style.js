import { createUseStyles } from "react-jss";
import { color, font_weight } from "../../../theme";
export const useStyles = createUseStyles({
  text: (props) => ({
    color: color[props.colorProps],
    fontWeight: font_weight[props.weightProps],
  }),
});
