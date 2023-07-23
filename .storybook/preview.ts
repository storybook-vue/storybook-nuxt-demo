import type { Preview } from "@storybook/vue3";
import { loadNuxtRootApp } from "@storybook/nuxt";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};


const vueApp = await loadNuxtRootApp();
//const nuxtApp = useNuxtApp();

console.log('\n  ========== \n vueApp :', vueApp);
//console.log('\n  ========== \n nuxtApp :', nuxtApp);

export default preview;
