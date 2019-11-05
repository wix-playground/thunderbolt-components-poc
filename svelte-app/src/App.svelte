<script>
  import {Component} from 'svelte-app-components';
  import Wat from './Wat.svelte';
  let name = 'tomp';
  let _innerWidth;
</script>

<svelte:window bind:innerWidth={_innerWidth}/>
<h1>Helllllo</h1>
<h2>I am in {typeof _innerWidth === 'number' ? 'client' : 'ssr'}</h2>
<Component name={name}></Component>
<Wat></Wat>