// Components

import Home from "./components/home/index.svelte";
import DemoHome from "./components/demo-home/index.svelte";
import {
  glueConfig,
  previewRouterExternals,
  searchType,
  searchLang,
} from "@glue/glue-cli";

import { wrap } from "svelte-spa-router/wrap";
const { locales, defaultLang, defaultType, types } = glueConfig.site;
let currentType = searchType(types, defaultType);
let currentLang = searchLang(locales, defaultLang);
export default {
  // Exact path
  "/": wrap({
    asyncComponent: () => import("./components/home/index.svelte") as any,
    props: {
      name: `home`,
      path: "home",
      lang: currentLang,
      type: currentType,
    },
  }),
};
