# thunderbolt-components-poc

```
cd svelte-app \
npm run dev
```

we got an external svelte component bundles as UMD, and consumed/imported both sync and dynamically by a different App.

`svelte-external-component` is bundled as a UMD (after svelte-compile).
`svelte-app` imports it dynamically (a different webpack chunk).
