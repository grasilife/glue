<script lang="ts">
  import "./index.less";
  import { glueConfig } from "@glue/glue-cli";
  import { getContext, onDestroy } from "svelte";
  import { push } from "svelte-spa-router";
  export let name: string;
  export let path: string;
  export let lang: string;
  export let type: string;
  const { locales } = glueConfig.site;
  let nav;
  let config;
  let smallTitle;
  $: {
    config = locales[lang];
    console.log(locales, lang, config, "config");
  }

  $: {
    type = type || "vue3";
  }
  $: {
    nav = config.nav.filter(
      (item: { previewHidden: boolean }) => item.previewHidden !== true
    );
    console.log(nav, "nav");
  }
  $: {
    smallTitle = config.title.length >= 8;
  }
  function glueItemClick(event: { detail: { path: any } }) {
    console.log(event, "event");
    let pathEnd = `/${type}/${lang}/${event.detail.path}`;
    console.log(pathEnd, "pathEndpathEnd");
    push(pathEnd);
  }
</script>

<div class="demo-home">
  <h1 class="demo-home__title" class:demo-home__title--small={smallTitle}>
    <img src={config.logo} alt="" />
    <span>{config.title}</span>
  </h1>
  {#if config.description}
    <h2 class="demo-home__desc">
      {config.description}
    </h2>
  {/if}
  {#each nav as group}
    <glue-doc-nav-list
      gtitle={group.title}
      group={group.items}
      on:glueItemClick={glueItemClick}
    />
  {/each}
</div>
