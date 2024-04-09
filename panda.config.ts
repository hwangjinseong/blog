import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,

  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  exclude: [],

  outdir: "styled-system",

  theme: {
    extend: {},
  },

  patterns: {
    extend: {
      scrollable: {
        description: "A container that allows for scrolling",
        defaultValues: {
          direction: "vertical",
          hideScrollbar: true,
        },
        properties: {
          direction: { type: "enum", value: ["horizontal", "vertical"] },
          hideScrollbar: { type: "boolean" },
        },
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

      mainTheme: "[data-theme=main] &",
      secondaryTheme: "[data-theme=secondary] &",

      mq: "@media (min-width: token(sizes.4xl))",
      size2: "&[data-size=token(spacing.2)]",
    },
  },

  utilities: {
    extend: {
      br: {
        className: "rounded",
        values: "radii",
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
