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
    outline: "none",
    ...button_types[props.buttonType],
    "&:disabled": {
      backgroundColor: color.PRIMARY,
      borderColor: color.PRIMARY,
      cursor: "default",
      ...button_types[props.buttonType],
    },
  }),
  link: (props) => ({
    border: "0",
    width: "fit-content",
    boxSizing: "border-box",
    backgroundColor: color[props.colorProps],
    padding: button_sizes[props.sizeProps].padding,
    borderRadius: button_borders[props.cornerProps],
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    outline: "none",
    textDecoration: "none",
    transitionDuration: "0.1s",
    ...button_types[props.typeProps],
    "&:hover": {
      transform: "scale(1.05)",
      transitionDuration: "0.1s",
    },
    "&:active": {
      transform: "scale(0.95)",
    },
    "&:focus": {
      backgroundColor: "rgba(255,255,255,1)",
    },
    "&:disabled": {
      backgroundColor: color.DISABLED,
      borderColor: color.DISABLED,
      cursor: "not-allowed",
      ...button_types[props.typeProps],
    },
  }),
});
