import { createUseStyles } from "react-jss";
import { SCREEN_TABLET } from "../../theme";

export const useStyles = createUseStyles({
  skillsLogo: (props) => ({
    width: "auto",
    height: `${props.sizeProps.toString()}px`,
    transform: props.transformProps,
    "& > path": {
      fill: props.colorProps,
    },
  }),
  [`@media (min-width:${SCREEN_TABLET.MIN}px)`]: {
    skillsLogo: (props) => ({
      height: `calc(${props.sizeProps.toString()}px/0.625)`,
    }),
  },
});
