import { createUseStyles } from "react-jss";
import Color from "color";
import { color, button_borders, button_sizes, button_types } from "../../theme";

export const useStyles = createUseStyles({
  button: (props) => ({
    border: "0",
    width: "fit-content",
    boxSizing: "border-box",
    backgroundColor: color[props.colorProps],
    borderColor: color[props.colorProps],
    textDecoration: "none",
    padding: button_sizes[props.sizeProps].padding,
    borderRadius: button_borders[props.cornerProps],
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    transition: "all 0.3s ease-in-out",
    ...button_types[props.typeProps],
    "&:hover": {
      backgroundColor: Color(color[props.colorProps])
        .mix(Color(color.SECONDARY), 0.2)
        .hex(),
      borderColor: Color(color[props.colorProps])
        .mix(Color(color.SECONDARY), 0.2)
        .hex(),
      transition: "all 0.3s ease-in-out",
      ...button_types[props.typeProps],
    },
    // "&:focus": {
    //   boxShadow: "0 0 0 2px #2f2f2b, 0 0 1px 4px #FF7129",
    //   outline: "2px dotted transparent",
    //   outlineOffset: "2px",
    // },
    "&:disabled": {
      backgroundColor: color.DISABLED,
      borderColor: color.DISABLED,
      cursor: "not-allowed",
      ...button_types[props.typeProps],
    },
  }),
});
