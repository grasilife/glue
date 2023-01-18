import { defineConfig } from "vite";
import vitePluginVue from "@vitejs/plugin-vue";
import { createRequire } from "module";
import hljs from "highlight.js";
import vitePluginMd from "vite-plugin-md";
// import { injectHtml } from "vite-plugin-html";
import type MarkdownIt from "markdown-it";
function markdownHighlight(str: string, lang: string) {
  if (lang && hljs.getLanguage(lang)) {
    // https://github.com/highlightjs/highlight.js/issues/2277
    return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
  }

  return "";
}
function markdownCardWrapper(htmlCode: string) {
  const group = htmlCode
    .replace(/<h3/g, ":::<h3")
    .replace(/<h2/g, ":::<h2")
    .split(":::");

  return group
    .map((fragment) => {
      if (fragment.indexOf("<h3") !== -1) {
        return `<div class="van-doc-card">${fragment}</div>`;
      }

      return fragment;
    })
    .join("");
}
function markdownLinkOpen(md: MarkdownIt) {
  const defaultRender = md.renderer.rules.link_open;

  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const aIndex = tokens[idx].attrIndex("target");

    if (aIndex < 0) {
      tokens[idx].attrPush(["target", "_blank"]); // add new attribute
    }

    if (defaultRender) {
      return defaultRender(tokens, idx, options, env, self);
    }

    return self.renderToken(tokens, idx, options);
  };
}
export default defineConfig({
  plugins: [
    vitePluginVue({
      include: [/\.vue$/, /\.md$/],
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("glue-"),
        },
      },
    }),
    vitePluginMd({
      wrapperClasses: "van-doc-markdown-body",
      transforms: {
        after: markdownCardWrapper,
      },
      markdownItOptions: {
        typographer: false, // https://markdown-it.github.io/markdown-it/#MarkdownIt
        highlight: markdownHighlight,
      },
      markdownItSetup(md: MarkdownIt) {
        const require = createRequire(import.meta.url);
        const { slugify } = require("transliteration");
        const markdownItAnchor = require("markdown-it-anchor");

        markdownLinkOpen(md);

        md.use(markdownItAnchor, {
          level: 2,
          slugify,
        });
      },
    }),
  ],
  resolve: {
    alias: {
      "~": "/src",
    },
  },
  server: {
    port: 3001,
    proxy: {
      "^/vue2-preview": {
        target: "http://127.0.0.1:3002",
        changeOrigin: true,
      },
    },
  },
});
