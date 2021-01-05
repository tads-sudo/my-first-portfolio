import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  svg: (props) => ({
    width: "auto",
    height: `${props.sizeProps.toString()}px`,
    transform: props.transformProps,
    "& > path": {
      fill: props.colorProps,
    },
  }),
});
