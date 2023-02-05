<script lang="ts">
  import { glueConfig } from "@glue/glue-cli";
  import { getContext, onDestroy } from "svelte";

  export let num;
  console.log(num, "huhuhauh");
</script>

<div class="demo-home">
  111
  <!-- <h1 class="demo-home__title">
    <img :src="config.logo" />
    <span>{config.title}</span>
  </h1>
  <h2 v-if="config.description" class="demo-home__desc">
    {config.description}
  </h2>
  <glue-doc-nav-list /> -->
  <glue-doc-nav-list />
</div>
