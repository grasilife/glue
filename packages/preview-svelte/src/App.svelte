<script>
  import Router from "svelte-spa-router";
  import routes from "./router";
</script>

<ul>
  <li><a href="#/">Home</a></li>
  <li><a href="#/hello/svelte">Say hi!</a></li>
  <li><a href="#/wild/card">Wildcard route</a></li>
  <li><a href="#/does/not/exist">Not found</a></li>
</ul>

<Router {routes} />
