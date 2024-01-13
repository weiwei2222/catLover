export const color = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#fbe9e7",
    100: "#ffccbc",
    200: "#ffab91",
    300: "#ff8a65",
    400: "#ff7043",
    500: "#ff5722",
    600: "#f4511e",
    700: "#e64a19",
    800: "#d84315",
    900: "#bf360c",
  },
};

const getTheme = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // dark
            primary: {
              dark: color.primary[200],
              main: color.primary[500],
              light: color.primary[800],
            },
            neutral: {
              dark: color.grey[100],
              main: color.grey[200],
              mediumMain: color.grey[300],
              medium: color.grey[400],
              light: color.grey[700],
            },
            background: {
              default: color.grey[900],
              alt: color.grey[800],
            },
          }
        : {
            // light
            primary: {
              dark: color.primary[700],
              main: color.primary[500],
              light: color.primary[100],
            },
            neutral: {
              dark: color.grey[700],
              main: color.grey[500],
              mediumMain: color.grey[400],
              medium: color.grey[300],
              light: color.grey[100],
            },
            background: {
              default: color.grey[10],
              alt: color.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export default getTheme;
