import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",

  patterns: {
    extend: {
      scrollable: {
        description: "A container that allows for scrolling",
        defaultValues: {
          direction: "vertical",
          hideScrollbar: true,
        },
        properties: {
          // The direction of the scroll
          direction: { type: "enum", value: ["horizontal", "vertical"] },
          // Whether to hide the scrollbar
          hideScrollbar: { type: "boolean" },
        },
        // disallow the `overflow` property (in TypeScript)
        blocklist: ["overflow"],
        transform(props) {
          const { direction, hideScrollbar, ...rest } = props;
          return {
            overflow: "auto",
            height: direction === "horizontal" ? "100%" : "auto",
            width: direction === "vertical" ? "100%" : "auto",
            scrollbarWidth: hideScrollbar ? "none" : "auto",
            WebkitOverflowScrolling: "touch",
            "&::-webkit-scrollbar": {
              display: hideScrollbar ? "none" : "auto",
            },
            ...rest,
          };
        },
      },
    },
  },
});
