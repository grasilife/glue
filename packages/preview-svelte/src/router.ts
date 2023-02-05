// Components
import DemoHome from "./components/demo-home/index.svelte";

import { wrap } from "svelte-spa-router/wrap";

export default {
  // Exact path
  "/": wrap({
    component: DemoHome,
    props: {
      num: 42,
    },
  }),
  // "*": NotFound,
};
