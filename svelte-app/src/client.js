import App from './App.svelte'

const app = new App({
  target: document.getElementById('root'),
  hydrate: true,
  props: { name: 'world' },
})


window.app = app

export default app
