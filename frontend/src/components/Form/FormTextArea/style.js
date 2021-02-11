import { createUseStyles } from "react-jss";
import { color } from "../../../theme";

export const useStyles = createUseStyles({
  formTextArea: {
    "& div": {
      background: "rgba(255, 255, 255, 0.05)",
      borderRadius: "8px",
    },
    "& textarea": {
      color: color.TERTIARY,
    },
    "& label": {
      color: color.SUBTLE,
    },
    "& label.Mui-focused": {
      color: color.PRIMARY,
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0)",
        borderRadius: "8px",
        transitionDuration: "0.2s",
      },
      "&:hover fieldset": {
        borderColor: color.PRIMARY,
        transitionDuration: "0.2s",
      },
      "&.Mui-focused fieldset": {
        borderColor: color.PRIMARY,
      },
    },
  },
});
