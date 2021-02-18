import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  svgSize: (props) => ({
    width: `${props.sizeProps.toString()}px`,
    height: `${props.sizeProps.toString()}px`,
    cursor: "pointer",
  }),
});
