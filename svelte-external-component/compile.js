const fs = require('fs');
const svelte = require('svelte/compiler');
const rollup = require('rollup');

const source = fs.readFileSync('./src/components/First.svelte', {encoding: 'utf-8'})

const {js: {code: javascript}, css: {code: stylesheet}} = svelte.compile(source, {});

const fileName = (isBundle = false) => `./dist/components/First${isBundle ? '.bundle' : ''}.js`

fs.writeFileSync(fileName(), javascript)
fs.writeFileSync('./dist/components/First.css', stylesheet)

rollup.rollup({
	input: fileName()
}).then(bundle => {
	return bundle.write({
		file: fileName(true),
		format: 'umd',
		name: 'myBundle'
	});
}).then(() => {
	fs.unlinkSync(fileName())
});

