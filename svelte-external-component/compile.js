const fs = require('fs');
const svelte = require('svelte/compiler');
const {promisify} = require('util')
const rollup = require('rollup');

const r = promisify(fs.readFile)
const w = promisify(fs.writeFile)

const _componentId = 'First'

async function bundleSingleComponent(componentId, isSSR) {
	const source = await r(`./src/components/${componentId}.svelte`, {encoding: 'utf-8'})
	const {js: {code: javascript}, css: {code: stylesheet}} = svelte.compile(source, {
		generate: isSSR ? 'ssr' : 'dom',
	});
	await Promise.all([
		w(`./dist/components/${componentId}.js`, javascript), // svelte compiled source
		w(`./dist/components/${componentId}.css`, stylesheet) // svelte compiled source
	])
	const bundle = await rollup.rollup({
		input: `./dist/components/${componentId}.js`
	})
	await bundle.write({
		file: `./dist/components/${componentId}.${isSSR ? 'ssr' : 'dom'}.bundle.js`,
		format: 'umd',
		name: `${componentId}Component`
	})
}

async function main() {
	const bundles = [true, false].map(isSSR => bundleSingleComponent(_componentId, isSSR));
	await Promise.all(bundles);
}

main().then(() => console.log('done!'))