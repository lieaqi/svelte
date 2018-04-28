/* generated by Svelte vX.Y.Z */
import { assign, createElement, createText, detachNode, init, insertNode, noop, proto, setAttribute } from "svelte/shared.js";

function create_main_fragment(component, ctx) {
	var div, text, div_1;

	return {
		c: function create() {
			div = createElement("div");
			text = createText("\n");
			div_1 = createElement("div");
			this.h();
		},

		h: function hydrate() {
			setAttribute(div, "data-foo", "bar");
			setAttribute(div_1, "data-foo", ctx.bar);
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			insertNode(text, target, anchor);
			insertNode(div_1, target, anchor);
		},

		p: function update(changed, ctx) {
			if (changed.bar) {
				setAttribute(div_1, "data-foo", ctx.bar);
			}
		},

		u: function unmount() {
			detachNode(div);
			detachNode(text);
			detachNode(div_1);
		},

		d: noop
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent.prototype, proto);
export default SvelteComponent;