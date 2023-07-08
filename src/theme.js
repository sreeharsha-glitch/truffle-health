import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

// utilizing the colors (#7e77e5) and fonts(Plus Jakarta Sans) from truffle.health
export const theme = extendTheme(
  withDefaultColorScheme({
    colorScheme: "purple",
  }),
  {
    initialColorMode: 'light',
    useSystemColorMode: false,
    colors: {
      primary: "#7E77E5"
    },
    fonts: {
      body: "'Plus Jakarta Sans', sans-serif",
      heading: "'Plus Jakarta Sans', sans-serif",
    },
    styles: {
      global: {
        "#root": {
          height: "100%"
        },
        ".invalid": {
          borderColor: "crimson",
          boxShadow: "crimson 0px 0px 0px 1px",
        },
        ".active-route": {
          bg: "primary",
          color: "white",
        }
      }
    }
  }
);
