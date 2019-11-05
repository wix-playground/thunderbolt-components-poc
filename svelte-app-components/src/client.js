__webpack_public_path__ = 'http://localhost:3000/public/components/client/'

const svelteAppComponents = {
	Component: import('./Component.svelte'),
	Component2: import('./Component2.svelte'),
	Component3: import('./Component3.svelte'),
}

// const importAll = (r) => {
// 	r.keys().forEach(key => {
// 		let componentName = key.replace('.svelte', '').replace('./', '')
// 		console.log('import = >' , key);
//
// 		svelteAppComponents[componentName] = import(require.resolve(key))
// 	})
// }
//
// importAll(require.context('./', true, /\.svelte$/))

window.svelteAppComponents = svelteAppComponents
module.exports = svelteAppComponents
