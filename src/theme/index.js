export const WHITE = "#ffffff";
export const BLACK = "#000000";
export const SNOW_DRIFT = "#f9faf7";
export const BURNING_ORANGE = "#ff7129";
export const SUNSET_ORANGE = "#ff473a";
export const TUATARA = "#2f2f2b";
export const BANDICOOT = "#828276";
export const CONIFER = "#71ea41";
export const TURQUISE_BLUE = "#4bedea";
export const CHICAGO = "#5B5B53";
export const NONE = "rgba(0,0,0,0)";

export const color = {
  PRIMARY: BURNING_ORANGE,
  SECONDARY: TUATARA,
  TERTIARY: SNOW_DRIFT,
  DISABLED: CHICAGO,
  SUBTLE: BANDICOOT,
  SUCCESS: CONIFER,
  ERROR: SUNSET_ORANGE,
  LINKS: TURQUISE_BLUE,
  BLACK: BLACK,
  WHITE: WHITE,
  NONE: NONE,
};

export const font_weight = {
  THIN: "100",
  EXTRA_LIGHT: "200",
  LIGHT: "300",
  NORMAL: "400",
  MEDIUM: "500",
  SEMI_BOLD: "600",
  BOLD: "700",
  EXTRA_BOLD: "800",
  BLACK: "900",
};

export const button_sizes = {
  SM: {
    padding: "8px 24px",
  },
  MD: {
    padding: "10px 30px",
  },
  LG: {
    padding: "12px 36px",
  },
  XL: {
    padding: "18px 54px",
  },
};

export const button_spacing = {
  4: "4px",
  8: "8px",
};

export const button_borders = {
  0: "0",
  8: "8px",
  16: "16px",
  32: "32px",
};

export const button_types = {
  FILL: {
    border: "none",
  },
  OUTLINE: {
    backgroundColor: "transparent",
    borderWidth: "1px",
    borderStyle: "solid",
  },
  GHOST: {
    backgroundColor: "transparent",
    border: "none",
  },
};

export const SCREEN_MOBILE = { MIN: 320, MAX: 540 };
export const SCREEN_TABLET = { MIN: 541, MAX: 1024 };
export const SCREEN_DESKTOP = { MIN: 1025, MAX: 0 };
