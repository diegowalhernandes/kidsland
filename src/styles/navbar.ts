import { styled } from "@stitches/react";

export const NavbarContainer = styled("nav", {
  height: "6vw",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#f1f1f1",

  ".logo": {
    maxWidth: "100%",
    height: "auto"
  },

  ".nav-items a": {
    color: "#555",
    fontSize: "1.25rem",
    textDecoration: "none",
    margin: "15px",
    position: "relative",
    opacity: "0.9",
  },

  ".nav-items a:hover": {
    opacity: "1",
  },

  ".nav-toggle": {
    display: "none",
  },

  "@media (max-width: 700px)": {
    borderBottom: "100%",
    height: "15vw",

    ".nav-items": {
      position: "absolute",
      top: "60px",
      display: "flex",
      flexDirection: "column",
      background: "#ddd",
      left: "0",
      width: "100%",
      height: "100%",
      transform: "translateX(-100%)",
      transition: "all 0.45s",
    },

    ".nav-items > a::before": {
      background: "transparent",
    },

    ".nav-items.open": {
      transform: "translateX(0)",
    },

    ".nav-toggle": {
      display: "flex",
      width: "50px",
      height: "50px",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },

    ".nav-toggle > .bar": {
      position: "relative",
      width: "32px",
      height: "2px",
      background: "#555",
      transition: "all 0.45s ease-in-out",
    },

    ".nav-toggle > .bar::before, .nav-toggle > .bar::after": {
      content: '""',
      position: "absolute",
      height: "2px",
      background: "#555",
      borderRadius: "2px",
      transition: "all 0.45s ease-in-out",
    },

    ".nav-toggle .bar::before": {
      width: "25px",
      transform: "translateY(-8px)",
      right: "0",
    },

    ".nav-toggle > .bar::after": {
      width: "32px",
      transform: "translateY(8px)",
    },

    ".nav-toggle.open > .bar": {
      transform: "translateX(-40px)",
      background: "transparent",
    },

    ".nav-toggle.open > .bar::before": {
      width: "32px",
      transform: "rotate(45deg) translate(26px, -26px)",
    },

    ".nav-toggle.open > .bar::after": {
      transform: "rotate(-45deg) translate(26px, 26px)",
    },
  },
});