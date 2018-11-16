/// <reference types="semantic-ui" />
/// <reference types="jquery" />

export default {
	bind(el, binding, vnode, oldVnode) {
		var modifiers = Object.keys(binding.modifiers).join(' '),
			dimmer = $(`<div class="ui ${modifiers} loader">ldng</div>`),
			dimmable = $(el)
				.addClass('dimmable')
				.data('dimmel', dimmer)
				.dimmer('add content', dimmer)
				.dimmer('create');
			if(binding.modifiers.blurring) dimmable.addClass('blurring');
	},
	update(el, binding, vnode, oldVnode) {
		$(el).data('dimmel')
			.addClass('text')
			.text('string'=== typeof binding.value ? binding.value : '');
		if(binding.value)	//TODO: Transform this in a ternary operator ( ...?'show':'hide') without typescript going berzerk
			$(el).dimmer('show');
		else
			$(el).dimmer('hide');
	}
};
