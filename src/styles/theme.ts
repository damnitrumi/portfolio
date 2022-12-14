export const theme = {
  colors: {
    primaryColor: "#1b1b1b",
    secondaryColor: "#dc143c",
    white: "#FFFFFF",
    mediumGray: "#DDDDDD",
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
      headings: "Bebas-Neue",
    },
    sizes: {
      xsmall: "8rem",
      small: "1.6rem",
      medium: "2.4rem",
      large: "3.2rem",
      xlarge: "4.0rem",
      xxlarge: "4.8rem",
      huge: "5.6rem",
      xhuge: "6.4rem",
    },
  },
  media: {
    ltaMedium: "(max-width: 768px)",
  },
  spacings: {
    xsmall: "8rem",
    small: "1.6rem",
    medium: "2.4rem",
    large: "3.2rem",
    xlarge: "4.0rem",
    xxlarge: "4.8rem",
    huge: "5.6rem",
    xhuge: "6.4rem",
  },
  paddings: {
    containerDefault: "30px 60px",
    containerLtaMedium: "20px",
  },
} as const;
