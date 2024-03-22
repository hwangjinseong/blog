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

  conditions: {
    extend: {
      groupHover: "[role=group]:where(:hover, [data-hover]) &",

      dark: '.dark &, [data-theme="dark"] &',

      mq: "@media (min-width: token(sizes.4xl))",
      size2: "&[data-size=token(spacing.2)]",
    },
  },

  utilities: {
    extend: {
      br: {
        className: "rounded", // css({ br: "sm" }) => rounded-sm
        values: "radii", // connect values to the radii tokens
        transform(value) {
          return { borderRadius: value };
        },
      },

      borderX: {
        values: { small: "2px", medium: "5px" },
        shorthand: "bx",
        transform(value, { token }) {
          return {
            borderTopWidth: value,
            borderTopColor: token("colors.gray.400"),
          };
        },
      },

      truncate: {
        className: "truncate",
        values: { type: "boolean" },
        transform(value) {
          if (!value) return {};
          return {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          };
        },
      },
    },
  },
});
