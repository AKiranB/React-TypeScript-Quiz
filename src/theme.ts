import { extendTheme, Theme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  heading: "Raleway",
  body: "Raleway",
};

const colors = {
  black: "#16161D",
  primary: {
    main: "#59C9A5",
    success: "#FFFD98",
  },
  surface: {
    main: "#B9E3C6",
    blue: "#3E92CC",
  },
  error: "#FE6D73",
};

const breakpoints = createBreakpoints({
  sm: "45em",
  md: "55em",
  lg: "65em",
  xl: "75em",
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
    primary: {
      main: "#59C9A5",
      success: "#FFFD98",
    },
    surface: {
      main: "#B9E3C6",
      blue: "#3E92CC",
    },
    error: "d81e5b",
  },
  fonts,
  breakpoints,
  textStyles: {
    h1: {
      fontSize: "35px",
      lineHeight: "110%",
      letterSpacing: "-2%",
      fonts: fonts,
    },
    h2: {
      fontSize: "35px",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
  },
});

export default theme;
export { colors };
