import {Ripper} from 'vue-ripper'

export const DataMold = {
	mixins: [Ripper],
	inject: ['modeled'],
	props: {
		select: {default: ()=> true, type: Function}
	},
	mounted: function() {
		this.modeled.molds.unshift(this);
	},
	destroyed: function() {
		var lst = this.modeled.molds,
			ndx = lst.indexOf(this);
		if(~ndx) lst.splice(ndx, 1);
	}
};
export const FieldInput = {
	inject: ['field'],
	props: {tag: {type: String, default: 'span'}},
	render(h) {
		return h(this.tag, this.field.$slots.input || this.$slots.default)
	}
}