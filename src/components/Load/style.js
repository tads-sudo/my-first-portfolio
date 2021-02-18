import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP } from "../../theme";

export const useStyles = createUseStyles({
  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {},
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {},
});
