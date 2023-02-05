<script lang="ts">
  import Router from "svelte-spa-router";
  import DemoHome from "~/components/demo-home/index.svelte";
  import { onMount } from "svelte";
  import { previewRouterExternals } from "@glue/glue-cli";
  import { replace } from "svelte-spa-router";
  export let lang: string;
  export let name: string;
  export let type: string;
  export let path: string;
  import { wrap } from "svelte-spa-router/wrap";
  console.log(lang, "langlanglang");
  let title;
  let showDocNav;
  $: {
    title = name ? name.replace(/-/g, "") : "";
    showDocNav = !previewRouterExternals.includes(path);
  }
  function onBack() {
    if (history.length > 1) {
      history.back();
    } else {
      replace("/");
    }
  }

  onMount(() => {
    window.addEventListener("message", (event) => {
      if (event.data?.type !== "replacePath") {
        return;
      }
      console.log(event.data, "event.data");
      const path = event.data?.value || "";
      replace(path);
    });
  });
  function syncPathToParent() {
    console.log(window.top, "window.top");
    if (window.top) {
      window.top.postMessage(
        {
          type: "replacePath",
          value: path,
        },
        "*"
      );
    }
  }
  const routes = {
    "/svelte/zh-CN/home": wrap({
      component: DemoHome,
      props: {
        name: `home`,
        path: "home",
        lang: lang,
        type: type,
      },
    }),
  };
</script>

{#if showDocNav}
  <glue-doc-nav gtitle={title} />
{/if}
<Router {routes} />
