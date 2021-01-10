import { createUseStyles } from "react-jss";
import { color, button_borders, button_sizes, button_types } from "../../theme";

export const useStyles = createUseStyles({
  button: (props) => ({
    border: "0",
    width: "fit-content",
    boxSizing: "border-box",
    backgroundColor: color[props.colorProps],
    borderColor: color[props.colorProps],
    padding: button_sizes[props.sizeProps].padding,
    borderRadius: button_borders[props.cornerProps],
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    ...button_types[props.typeProps],
    "&:disabled": {
      backgroundColor: color.DISABLED,
      borderColor: color.DISABLED,
      cursor: "not-allowed",
      ...button_types[props.typeProps],
    },
  }),
  navlink: {
    textDecoration: "none",
  },
});
