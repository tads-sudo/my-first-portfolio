import { createUseStyles } from "react-jss";
import { SCREEN_TABLET } from "../../theme";

export const useStyles = createUseStyles({
  skillIcon: (props) => ({
    width: "auto",
    height: `${props.sizeProps.toString()}px`,
  }),
  [`@media (min-width:${SCREEN_TABLET.MIN}px)`]: {
    skillIcon: (props) => ({
      height: `calc(${props.sizeProps.toString()}px/0.625)`,
    }),
  },
});
