<script>
  // import FirstComponent from 'svelte-external-component/dist/components/First.bundle.js';
  import Loadable from 'svelte-loadable';
  let name = 'tomp';
  const getDelayedLoader = (delay = 1000) => () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import('svelte-external-component/dist/components/First.bundle.js')), delay),
    )
</script>


<h1>Helllllo</h1>
<!-- <h2>Below is a sync import 👇</h2>
<FirstComponent></FirstComponent> -->
<h2>Below is a async import 👇</h2>
<div>
<Loadable name={name} loader={getDelayedLoader()}></Loadable>
</div>