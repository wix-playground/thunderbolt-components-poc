<script>
    import { Component, Component2 } from 'svelte-app-components'
    import Loading from './Loading.svelte'
    import { onMount } from 'svelte'
    import { Components } from './components'

    let name = ''
    $: props = { name }

    let _innerWidth

    let componentsToRender = [
        {
            componentType: 'Component',
        },
        {
            componentType: 'Component2',
        },
        {
            componentType: 'Component2',
        },
    ]

    let isInSSR = typeof _innerWidth !== 'number'

    let loaded = false

    onMount(() => {
        //TODO : think about preload
        Promise.all([Component, Component2]).then(components => {

            Components.setLoaded('Component', components[0].default)
            Components.setLoaded('Component2', components[1].default)

            loaded = true
        })
    })

</script>

<svelte:window bind:innerWidth={_innerWidth}/>
<h1>Root level svelte component in {isInSSR ? 'ssr' : 'client'} {_innerWidth}</h1>

<input bind:value={name} placeholder="enter your name">

{#if loaded}
    {#each componentsToRender as { componentType }}
        <svelte:component this={Components.getComponentByType(componentType)} {...props}/>
    {/each}
{:else}
    <Loading/>
{/if}
