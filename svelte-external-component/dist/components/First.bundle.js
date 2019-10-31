(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('svelte/internal')) :
	typeof define === 'function' && define.amd ? define(['svelte/internal'], factory) :
	(global = global || self, global.myBundle = factory(global.internal));
}(this, (function (internal) { 'use strict';

	/* generated by Svelte v3.12.1 */

	function add_css() {
		var style = internal.element("style");
		style.id = 'svelte-i7qo5m-style';
		style.textContent = "h1.svelte-i7qo5m{color:purple}";
		internal.append(document.head, style);
	}

	function create_fragment(ctx) {
		var h1, t0, t1, t2;

		return {
			c() {
				h1 = internal.element("h1");
				t0 = internal.text("Hello ");
				t1 = internal.text(ctx.name);
				t2 = internal.text("! I am an extrernal UMD bundle");
				internal.attr(h1, "class", "svelte-i7qo5m");
			},

			m(target, anchor) {
				internal.insert(target, h1, anchor);
				internal.append(h1, t0);
				internal.append(h1, t1);
				internal.append(h1, t2);
			},

			p(changed, ctx) {
				if (changed.name) {
					internal.set_data(t1, ctx.name);
				}
			},

			i: internal.noop,
			o: internal.noop,

			d(detaching) {
				if (detaching) {
					internal.detach(h1);
				}
			}
		};
	}

	function instance($$self, $$props, $$invalidate) {
		let { name } = $$props;

		$$self.$set = $$props => {
			if ('name' in $$props) $$invalidate('name', name = $$props.name);
		};

		return { name };
	}

	class Component extends internal.SvelteComponent {
		constructor(options) {
			super();
			if (!document.getElementById("svelte-i7qo5m-style")) add_css();
			internal.init(this, options, instance, create_fragment, internal.safe_not_equal, ["name"]);
		}
	}

	return Component;

})));
