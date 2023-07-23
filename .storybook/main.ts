import type { StorybookConfig } from "@storybook/nuxt";
// import { createApp } from "./nuxt"
const config: StorybookConfig = {
  stories: ["../**/*.mdx", "../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nuxt",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};

// const vueApp = createApp();

export default config;
