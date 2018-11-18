module.exports = {"accordion":"<template>\r\n\t<s-accordion>\r\n\t\t<s-panel title=\"What is a dog?\">\r\n\t\t\t<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\r\n\t\t</s-panel>\r\n\t\t<s-panel title=\"What kinds of dogs are there?\">\r\n\t\t\t<p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>\r\n\t\t</s-panel>\r\n\t</s-accordion>\r\n</template>\r\n<script lang=\"ts\">\r\nimport Vue from 'vue'\r\nimport {Component, Inject, Model, Prop, Watch, Emit} from 'vue-property-decorator'\r\n\r\n@Component\r\nexport default class Accordion extends Vue {\r\n}\r\n</script>","buttons":"<template>\r\n\t<div>\r\n\t\t<div>\r\n\t\t\t<s-modal v-model=\"modal1\" closable header=\"\">\r\n\t\t\t\tBlah Blah\r\n\t\t\t\t<s-button v-command:cancel>Cancel</s-button>\r\n\t\t\t\t<s-button v-command:ok>Ok</s-button>\r\n\t\t\t</s-modal>\r\n\t\t\t<s-button @click=\"modal1(()=> loading='This is ok...')\">\r\n\t\t\t\tmodal\r\n\t\t\t</s-button>\r\n\t\t\t<s-button @click=\"blurred = !blurred\">\r\n\t\t\t\t<s-icon icon=\"save\" slot=\"prepend\" />\r\n\t\t\t\tblurr\r\n\t\t\t</s-button>\r\n\t\t\t<s-button icon=\"+plus+red dont\" @click=\"loading = !loading\">\r\n\t\t\t\tloading\r\n\t\t\t</s-button>\r\n\t\t\t<s-button @click=\"loading = !loading && 'loading!'\">\r\n\t\t\t\t<s-icon icon=\"minus\" slot=\"append\" />\r\n\t\t\t\tloading text\r\n\t\t\t</s-button>\r\n\t\t\t<s-button @click=\"test\" ref=\"button\">\r\n\t\t\t\t<s-icon icon=\"add circle\" />\r\n\t\t\t\t<div class=\"ui special popup\">\r\n\t\t\t\t\t<div class=\"header\">Custom Header</div>\r\n\t\t\t\t\t<div class=\"ui button\">Click Me</div>\r\n\t\t\t\t</div>\r\n\t\t\t</s-button>\r\n\t\t\t<s-button icon=\"add square\" />\r\n\t\t</div>\r\n\r\n\t\t<div>\r\n\t\t\t<s-dimmable blurring v-model=\"blurred\" icon=\"heart\" message=\"Dimmed Message!\">\r\n\t\t\t\t<img class=\"ui medium image\" src=\"https://semantic-ui.com/images/wireframe/image.png\" />\r\n\t\t\t</s-dimmable>\r\n\t\t\t<div v-loading.indeterminate=\"loading\">\r\n\t\t\t\t<img class=\"ui medium image\" src=\"https://semantic-ui.com/images/wireframe/image.png\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n<script lang=\"ts\">\r\nimport Vue from 'vue'\r\nimport {Component, Inject, Model, Prop, Watch, Emit} from 'vue-property-decorator'\r\n\r\n@Component\r\nexport default class Buttons extends Vue {\r\n\tblurred: boolean = false\r\n\tloading: boolean = false\r\n\tmodal1 = null\r\n\ttest() {\r\n\t\tdebugger;\r\n\t\t/*$(this.$refs.button)\r\n\t\t\t.popup({\r\n\t\t\t\ttitle   : 'Popup Title',\r\n\t\t\t\tcontent : 'Hello I am a popup'\r\n\t\t\t});\r\n\t\t$(this.$refs.button)\r\n\t\t\t.popup({\r\n\t\t\t\tinline: true\r\n\t\t\t});*/\r\n\t}\r\n}\r\n</script>","form":"<template>\r\n\t<div class=\"ui segments\">\r\n\t\t<s-form :model=\"model\"\r\n\t\t\t:schema=\"schema\"\r\n\t\t\tdisplay-errors\r\n\t\t\tlabel-width=\"200px\"\r\n\t\t\tinline\r\n\t\t\tclass=\"ui segment\"\r\n\t\t>\r\n\t\t\t<s-data-mold select=\"bool\">\r\n\t\t\t\t<template slot=\"prepend\" slot-scope=\"field\">\r\n\t\t\t\t\t<label :style=\"field.labelStyle\" />\r\n\t\t\t\t</template>\r\n\t\t\t\t<template slot=\"input\" slot-scope=\"field\">\r\n\t\t\t\t\t<s-checkbox :label=\"field.label\" v-model=\"field.value\" />\r\n\t\t\t\t</template>\r\n\t\t\t</s-data-mold>\r\n\t\t\t<s-data-mold>\r\n\t\t\t\t<template slot=\"prepend\" slot-scope=\"field\">\r\n\t\t\t\t\t<label :for=\"field.name\" class=\"ui label\" :style=\"field.labelStyle\">\r\n\t\t\t\t\t\t<h3>{{field.label}}</h3>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</template>\r\n\t\t\t\t<template slot=\"input\" slot-scope=\"field\">\r\n\t\t\t\t\t<s-input :name=\"field.name\" v-model=\"field.value\">\r\n\t\t\t\t\t\t<s-icon slot=\"prepend\" :icon=\"field.info || ''\" />\r\n\t\t\t\t\t</s-input>\r\n\t\t\t\t</template>\r\n\t\t\t</s-data-mold>\r\n\t\t\t<s-field inline prop=\"big\" label=\"Big\" type=\"bool\" />\r\n\t\t\t<s-field prop=\"firstName\" label=\"First name\" info=\"hand pointer\" />\r\n\t\t\t<s-field prop=\"lastName\" label=\"Last name\" info=\"signal\" />\r\n\t\t\t<s-field prop=\"deep.reason\" label=\"Deep reason\"\r\n\t\t\t\t:input=\"number\"\r\n\t\t\t\t:output=\"x=> ''+ x\"\r\n\t\t\t/>\r\n\t\t\t<s-field prop=\"deep.thinking\" label=\"Deep thinking\">\r\n\t\t\t\t<s-select v-model=\"model.deep.thinking\" :options=\"['Too much', 'Yes', 'No']\" />\r\n\t\t\t</s-field>\r\n\t\t</s-form>\r\n\t\t<div class=\"ui segment\">\r\n\t\t\t<h1>Out of the form</h1>\r\n\t\t\t<s-checkbox style=\"display: block;\" v-model=\"model.big\" label=\"model.big\" />\r\n\t\t\t<s-input style=\"display: block;\" v-model=\"model.firstName\" />\r\n\t\t\t{{model}}\r\n\t\t\t<s-button style=\"display: block;\" @click=\"reInit\">Re-init</s-button>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\nimport Vue from 'vue'\r\nimport { Component, Inject, Model, Prop, Watch, Emit } from 'vue-property-decorator'\r\nimport { Model as DataModel, Property, Integer, Enum, MinLength } from'ts-json-schema-decorator'\r\n\r\n@DataModel()\r\nclass Deep {\r\n\t@Property() reason: number\r\n\t@Enum('Yes', 'No') thinking: string\r\n}\r\n@DataModel()\r\nclass Person {\r\n\t@MinLength() firstName: string\r\n\t@Property() lastName: string\r\n\t@Property() deep: Deep\r\n}\r\n\r\n@Component\r\nexport default class Form extends Vue {\r\n\tcreated() { this.reInit(); }\r\n\tnumber(string) {\r\n\t\tvar rv = Number(string);\r\n\t\tif(isNaN(rv)) throw new Error('Bad number');\r\n\t\treturn rv;\r\n\t}\r\n\treInit() {\r\n\t\tthis.model = {\r\n\t\t\tfirstName: \"\",\r\n\t\t\tlastName: \"\",\r\n\t\t\tbig: false,\r\n\t\t\tdeep: {\r\n\t\t\t\treason: 42,\r\n\t\t\t\tthinking: 'Yes'\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\tmodel = null\r\n\tschema = (<any>Person).schema\r\n}\r\n</script>","inputs":"<template>\r\n\t<div>\r\n\t\t<s-input>\r\n\t\t\t<s-icon slot=\"prepend\" circular link icon=\"search\" @click=\"testme\" />\r\n\t\t\t<s-select class=\"label\" slot=\"append\" v-model=\"ddn\" text=\"Gender\" on=\"hover\">\r\n\t\t\t\t<s-option value=\"M\">Male</s-option>\r\n\t\t\t\t<s-option value=\"F\">Female</s-option>\r\n\t\t\t</s-select>\r\n\t\t</s-input>\r\n\t\t<div>\r\n\t\t\t<label>Drop down:</label>\r\n\t\t\t{{ddn}}\r\n\t\t</div>\r\n\t\t<s-select name=\"extSelect\" style=\"display: block;\" inline action=\"select\" v-model=\"ddn\" text=\"Gender\" on=\"hover\">\r\n\t\t\t<s-option value=\"M\">Male</s-option>\r\n\t\t\t<s-option value=\"F\">Female</s-option>\r\n\t\t</s-select>\r\n\t\t<s-checkbox name=\"checkyes\" label=\"Yes!\" v-model=\"tchk\" />\r\n\t\t<div>\r\n\t\t\t<label>Checked:</label>\r\n\t\t\t{{tchk}}\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<s-input name=\"dimmedMinus\" inline v-dimm-parts:minus.inverted>\r\n\t\t\t\t<s-button slot=\"append\" class=\"input-dimmed\" icon=\"minus\" dimmed-part=\"minus\" />\r\n\t\t\t</s-input>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n<script lang=\"ts\">\r\nimport Vue from 'vue'\r\nimport {Component, Inject, Model, Prop, Watch, Emit} from 'vue-property-decorator'\r\n\r\n@Component\r\nexport default class Inputs extends Vue {\r\n\tddn = ''\r\n\ttchk: boolean = true\r\n\ttestme() {\r\n\t\tconsole.log('icon click');\r\n\t}\r\n}\r\n</script>","progress":"<template>\r\n\t<div class=\"progress-test\">\r\n\t\t<s-breadcrumbs :crumbs=\"crumbs\" />\r\n\t\t<s-progress :percent=\"percent\" v-model=\"status\" />\r\n\t\t<s-progress :value=\"value\" :total=\"total\" indicating ratio v-model=\"status\">\r\n\t\t\tindicating ratio\r\n\t\t</s-progress>\r\n\t\t<div class=\"ui inverted segment\">\r\n\t\t\t<s-progress :percent=\"percent\" inverted v-model=\"status\"\r\n\t\t\t\tprogress-text=\"!{percent}!\"\r\n\t\t\t\terror-text=\"Error!\"\r\n\t\t\t\twarning-text=\"Warning!\"\r\n\t\t\t\tactive-text=\"{left}% to go...\"\r\n\t\t\t\tsuccess-text=\"{percent}% done\"\r\n\t\t\t/>\r\n\t\t\t<s-progress inverted indicating :value=\"value\" :total=\"total\" ratio v-model=\"status\"\r\n\t\t\t\tprogress-text=\"!{value}/{total}!\"\r\n\t\t\t\terror-text=\"Error!\"\r\n\t\t\t\twarning-text=\"Warning!\"\r\n\t\t\t\tactive-text=\"{left} to go...\"\r\n\t\t\t\tsuccess-text=\"{value} done\"\r\n\t\t\t/>\r\n\t\t</div>\r\n\r\n\t\t<s-select v-model=\"status\" placeholder=\"status\">\r\n\t\t\t<s-option value=\"active\" />\r\n\t\t\t<s-option value=\"warning\" />\r\n\t\t\t<s-option value=\"success\" />\r\n\t\t\t<s-option value=\"error\" />\r\n\t\t</s-select>\r\n\t\t<div @mousedown=\"md\">\r\n\t\t\tClick here :\r\n\t\t\t<div class=\"command\" style=\"background: black;\" @mousemove=\"mm({offsetX: 0})\">\r\n\t\t\t\t&nbsp;\r\n\t\t\t</div>\r\n\t\t\t<div class=\"command\" style=\"background: grey; width: 400px;\" @mousemove=\"mm\">\r\n\t\t\t\t{{setValue}}/{{total}} -- {{setPercent}}%\r\n\t\t\t</div>\r\n\t\t\t<div class=\"command\" style=\"background: green;\" @mousemove=\"mm({offsetX: 400})\">\r\n\t\t\t\t&nbsp;\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n<style>\r\n.progress-test div.command {\r\n\twidth: 32px;\r\n\theight: 32px;\r\n\tdisplay: inline-block;\r\n}\r\n</style>\r\n<script lang=\"ts\">\r\nimport Vue from 'vue'\r\nimport {Component, Inject, Model, Prop, Watch, Emit} from 'vue-property-decorator'\r\n\r\n@Component\r\nexport default class Progress extends Vue {\r\n\tcrumbs = [{\r\n\t\ttext: 'Accordion',\r\n\t\tname: 'accordion'\r\n\t}, {\r\n\t\ttext: 'Buttons',\r\n\t\tname: 'buttons'\r\n\t}, {\r\n\t\ttext: 'Form',\r\n\t\tname: 'form'\r\n\t}, {\r\n\t\ttext: 'Inputs',\r\n\t\tname: 'inputs'\r\n\t}, {\r\n\t\ttext: 'Progress',\r\n\t\tname: 'progress'\r\n\t}]\r\n\tpercent = 0\r\n\tvalue = 0\r\n\ttotal = 23\r\n\tsetValue = 0\r\n\tsetPercent = 0\r\n\tstatus = null\r\n\tmounted() {\r\n\r\n\t}\r\n\tmm($event) {\r\n\t\tthis.setValue = Math.round($event.offsetX*23/400);\r\n\t\tthis.setPercent = Math.round($event.offsetX/8);\r\n\t}\r\n\tmd($event) {\r\n\t\tthis.percent = this.setPercent;\r\n\t\tthis.value = this.setValue;\r\n\t}\r\n}\r\n</script>","sidebars":"<template>\r\n\t<div>\r\n\t\t<s-sidebar direction=\"left\" v-model=\"shown\">\r\n\t\t\tLorem ipsum\r\n\t\t</s-sidebar>\r\n\t\t<div class=\"pusher\">\r\n\t\t\t<s-checkbox label=\"visible\" v-model=\"shown\" />\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n<script lang=\"ts\">\r\nimport Vue from 'vue'\r\nimport {Component, Inject, Model, Prop, Watch, Emit} from 'vue-property-decorator'\r\n\r\n@Component\r\nexport default class Sidebars extends Vue {\r\n\tshown: boolean = false\t//TODO: it fails when initialised at true for now\r\n}\r\n</script>","table":"<template>\r\n\t<div>\r\n\t\t<s-table\r\n\t\t\tcelled\r\n\t\t\tselectable\r\n\t\t\tv-model=\"my_row\"\r\n\t\t\t:rows=\"my_rows\"\r\n\t\t\tvery-basic\r\n\t\t\t:body-height=\"500\"\r\n\t\t>\r\n\t\t\t<div slot=\"header\">\r\n\t\t\t\tIn-table header\r\n\t\t\t</div>\r\n\t\t\t<s-checkbox-column :selection=\"my_selection\" />\r\n\t\t\t<s-column prop=\"a\" width=\"300\" header=\"a\" edit />\r\n\t\t\t<s-column header=\"A\">\r\n\t\t\t\t<template slot-scope=\"scope\">\r\n\t\t\t\t\ta{{scope.model.a}}-b{{scope.model.b}}\r\n\t\t\t\t</template>\r\n\t\t\t</s-column>\r\n\t\t\t<s-column prop=\"b\">\r\n\t\t\t\t<template slot=\"header\">\r\n\t\t\t\t\tB sum={{sum_b}}\r\n\t\t\t\t</template>\r\n\t\t\t</s-column>\r\n\t\t\t<s-column prop=\"deep.reason\" header=\"Q?\" edit />\r\n\t\t\t<s-row-edit-column\r\n\t\t\t\t@edit=\"(row, state)=> copy(row, state)\"\r\n\t\t\t\t@cancel=\"(row, state)=> copy(state, row)\"\r\n\t\t\t/>\r\n\t\t</s-table>\r\n\t\t<div>\r\n\t\t\t<p><h3>current-row</h3> {{my_row}} </p>\r\n\t\t\t<p><h3>selection</h3> {{my_selection}} </p>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n<script lang=\"ts\">\r\nimport Vue from 'vue'\r\nimport {Component, Inject, Model, Prop, Watch, Emit} from 'vue-property-decorator'\r\nimport {copy} from 'lib/deep'\r\n\r\nvar rows = (new Array(20)).fill(null).map((x,i)=> ({\r\n\ta: ''+i*2,\r\n\tb:i*2+1,\r\n\tdeep: {reason: 42}\r\n}));\r\n@Component\r\nexport default class Table extends Vue {\r\n\tcopy = copy\r\n\tmy_row = null\r\n\tmy_rows = rows\r\n\tmy_selection = []\r\n\tget sum_b() {\r\n\t\treturn this.my_rows.reduce((acc, row)=> acc + row.b, 0);\r\n\t}\r\n}\r\n</script>","tabs":"<template>\r\n\t<div>\r\n\t\t<s-tabs v-model=\"selected\">\r\n\t\t\t<s-panel title=\"What is a dog?\" name=\"whatIs\">\r\n\t\t\t\t<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\r\n\t\t\t</s-panel>\r\n\t\t\t<s-panel title=\"What kinds of dogs are there?\" name=\"whatAre\">\r\n\t\t\t\t<p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>\r\n\t\t\t</s-panel>\r\n\t\t\t<s-panel title=\"And...\" name=\"and\">\r\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n\t\t\t</s-panel>\r\n\t\t</s-tabs>\r\n\t\t<s-tabs position=\"bottom\" v-model=\"selected\">\r\n\t\t\t<s-panel title=\"What is a dog?\" name=\"whatIs\">\r\n\t\t\t\t<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\r\n\t\t\t</s-panel>\r\n\t\t\t<s-panel title=\"What kinds of dogs are there?\" name=\"whatAre\">\r\n\t\t\t\t<p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>\r\n\t\t\t</s-panel>\r\n\t\t\t<s-panel title=\"And...\" name=\"and\">\r\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n\t\t\t</s-panel>\r\n\t\t</s-tabs>\r\n\t\t<s-tabs position=\"left\" v-model=\"selected\">\r\n\t\t\t<s-panel title=\"What is a dog?\" name=\"whatIs\">\r\n\t\t\t\t<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\r\n\t\t\t</s-panel>\r\n\t\t\t<s-panel title=\"What kinds of dogs are there?\" name=\"whatAre\">\r\n\t\t\t\t<p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>\r\n\t\t\t</s-panel>\r\n\t\t\t<s-panel title=\"And...\" name=\"and\">\r\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n\t\t\t</s-panel>\r\n\t\t</s-tabs>\r\n\t\t<s-tabs position=\"right\" v-model=\"selected\">\r\n\t\t\t<s-panel title=\"What is a dog?\" name=\"whatIs\">\r\n\t\t\t\t<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\r\n\t\t\t</s-panel>\r\n\t\t\t<s-panel title=\"What kinds of dogs are there?\" name=\"whatAre\">\r\n\t\t\t\t<p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>\r\n\t\t\t</s-panel>\r\n\t\t\t<s-panel title=\"And...\" name=\"and\">\r\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n\t\t\t</s-panel>\r\n\t\t</s-tabs>\r\n\t</div>\r\n</template>\r\n<script lang=\"ts\">\r\nimport Vue from 'vue'\r\nimport {Component, Inject, Model, Prop, Watch, Emit} from 'vue-property-decorator'\r\n\r\n@Component\r\nexport default class Tabs extends Vue {\r\n\tselected: string = null\r\n}\r\n</script>"};