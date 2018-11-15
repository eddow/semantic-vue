import {Component} from 'vue-property-decorator'
import * as classed from './classed'

function onEvent(evt) {
	return 'on'+evt[0].toUpperCase()+evt.substr(1);
}

export function mixin(
	type: string,
	classes: any = {},
	inits: any = {},
	events: string[] = []
) {
	function forwarder(scope, evt) {
		return function(...args) {
			return scope.$cancelable(evt, ...args);
		};
	}
	function watcher(prop) {
		//TODO: test property change
		return function(value) {
			this.semantic('setting', prop, value);
		};
	}
	var rv: any = classed.mixin(type, classes);
	for(let i in inits)
		if('function'=== typeof inits[i] || inits[i] instanceof Array)
			inits[i] = {type: inits[i], default: null}
	rv.props = {...rv.props, ...inits};
	if(!rv.watch) rv.watch = {};
	for(let i in inits)
		rv.watch[i] = watcher(i);
	rv.methods = {
		semantic(...args) { return $(this.$el)[type](...args); },
		configure(config) {},
		init() {
			var config: any = {};
			for(let props in inits)
				if(null!== this[props])
					config[props] = this[props];
			for(let event of events)
				config[onEvent(event)] = forwarder(this, event);
			this.configure(config);
			this.semantic(config);
		}
	}
	rv.mounted = function() { this.init(); };
	return rv;
}

export default function(
	type: string,
	classes: any = {},
	inits: any = {},
	events: string[] = [],
	options: ComponentOptions = {}
) {
	options = {mixins: [], ...options};
	options.mixins.push(mixin(type, classes, inits, events));
	return Component(options);
}