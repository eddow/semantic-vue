<template>
	<div :class="['field', {error: scoped.errors.length, inline: isInline}]">
		<slot name="field" :model="modeled.model">
			<slot name="prepend" :model="modeled.model">
				<label v-if="label" :for="name" class="label" :style="labelStyle">
					{{label}}
				</label>
			</slot>
			<slot v-if="edit" name="field-input" :model="modeled.model">
				<slot name="input" :model="modeled.model">
					<input type="text" v-model="scoped.value" />
				</slot>
			</slot>
			<slot v-else name="field-display" :model="modeled.model" :value="scoped.value">
				<slot name="display" :model="modeled.model" :value="scoped.value">
					{{moldRender(scoped.value)}}
				</slot>
			</slot>
			<slot name="append" :model="modeled.model">
				<div v-if="scoped.errors.length && modeled.displayErrors && 'fields'=== this.modeled.errorPanel"
					:class="['ui', isInline&&'left', 'pointing red basic error label']"
				>
					<div v-for="error in scoped.errors" :key="error.schemaPath">
						{{error.message}}
					</div>
				</div>
			</slot>
		</slot>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Provide, Prop, Watch} from 'vue-property-decorator'
import molded from '../data/molded'

@Component({mixins: [molded(['append', 'prepend', 'field', 'input', 'field-input', 'display', 'field-display'])]})
export default class Field extends Vue {
	//from Property
	@Provide('form') modeled
	@Prop({default: true}) edit: boolean
	prop
	scope
	invalidateScopes
	//TODO: use `group` where we can and then create `field-group`
	//TODO: make recursive get - for `inline`, `labelWidth`, etc. and the slots
	//TODO: allow validation specifications that will add into the schema
	@Prop() label: string
	@Prop({default: null}) inline: boolean
	get isInline() {
		return null=== this.inline && this.modeled ? 
			this.modeled.inline : this.inline;
	}
	created() {
		/*TODO: assertion*/
		console.assert(this.modeled && 'Form'=== this.modeled.constructor.name,
			'Fields cannot be used outside of a Form');
	}
	
	get scoped() {
		return this.scope(this.modeled.model);
	}
	
	@Watch('modeled.model', {immediate:true}) changeModel(model) {
		this.invalidateScopes([model]);
	}

	get labelStyle() {
		return this.modeled && this.modeled.labelStyle;
	}
}
</script>