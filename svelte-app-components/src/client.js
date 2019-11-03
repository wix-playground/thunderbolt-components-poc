import Component from './Component.svelte'

const component = new Component({
  target: document.getElementById('root'),
  hydrate: true,
  props: { name: 'world' },
})

window.component = component

export default component
