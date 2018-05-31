[heroes-parser](../README.md) > ["element-functions/function-templates"](../modules/_element_functions_function_templates_.md)

# External module: "element-functions/function-templates"

## Index

### Functions

* [addAttribute](_element_functions_function_templates_.md#addattribute)
* [arrayOfNumberValues](_element_functions_function_templates_.md#arrayofnumbervalues)
* [arrayOfSingleValues](_element_functions_function_templates_.md#arrayofsinglevalues)
* [assetArrayToSingleObject](_element_functions_function_templates_.md#assetarraytosingleobject)
* [assets](_element_functions_function_templates_.md#assets)
* [booleanValue](_element_functions_function_templates_.md#booleanvalue)
* [filters](_element_functions_function_templates_.md#filters)
* [flags](_element_functions_function_templates_.md#flags)
* [localeText](_element_functions_function_templates_.md#localetext)
* [localeTextToSingleObject](_element_functions_function_templates_.md#localetexttosingleobject)
* [mergeElement](_element_functions_function_templates_.md#mergeelement)
* [numberValue](_element_functions_function_templates_.md#numbervalue)
* [parseTooltip](_element_functions_function_templates_.md#parsetooltip)
* [removeIfValue](_element_functions_function_templates_.md#removeifvalue)
* [renderTooltip](_element_functions_function_templates_.md#rendertooltip)
* [singleAsset](_element_functions_function_templates_.md#singleasset)
* [singleElementWithReplacement](_element_functions_function_templates_.md#singleelementwithreplacement)
* [valueFromAttributeIfOnlyHasKeys](_element_functions_function_templates_.md#valuefromattributeifonlyhaskeys)
* [valuesToSingleObject](_element_functions_function_templates_.md#valuestosingleobject)
* [valuesToSingleObjectOfNumbers](_element_functions_function_templates_.md#valuestosingleobjectofnumbers)

### Object literals

* [removeFromOutput](_element_functions_function_templates_.md#removefromoutput)
* [singleElement](_element_functions_function_templates_.md#singleelement)

---

## Functions

<a id="addattribute"></a>

###  addAttribute

▸ **addAttribute**(attribute: *`string`*, attributeValue: *`any`*): [ElementFunctions](../interfaces/_element_.elementfunctions.md)

*Defined in [element-functions/function-templates.ts:42](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L42)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attribute | `string` |
| attributeValue | `any` |

**Returns:** [ElementFunctions](../interfaces/_element_.elementfunctions.md)

___
<a id="arrayofnumbervalues"></a>

###  arrayOfNumberValues

▸ **arrayOfNumberValues**(attribute?: *`string`*): [ElementFunctions](../interfaces/_element_.elementfunctions.md)

*Defined in [element-functions/function-templates.ts:206](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L206)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` attribute | `string` | &quot;value&quot; |

**Returns:** [ElementFunctions](../interfaces/_element_.elementfunctions.md)

___
<a id="arrayofsinglevalues"></a>

###  arrayOfSingleValues

▸ **arrayOfSingleValues**(attribute?: *`string`*): [ElementFunctions](../interfaces/_element_.elementfunctions.md)

*Defined in [element-functions/function-templates.ts:200](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L200)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` attribute | `string` | &quot;value&quot; |

**Returns:** [ElementFunctions](../interfaces/_element_.elementfunctions.md)

___
<a id="assetarraytosingleobject"></a>

###  assetArrayToSingleObject

▸ **assetArrayToSingleObject**(keyAttribute?: *`string`*, valueAttribute?: *`string`*): [ElementFunctions](../interfaces/_element_.elementfunctions.md)

*Defined in [element-functions/function-templates.ts:193](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L193)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` keyAttribute | `string` | &quot;index&quot; |
| `Default value` valueAttribute | `string` | &quot;value&quot; |

**Returns:** [ElementFunctions](../interfaces/_element_.elementfunctions.md)

___
<a id="assets"></a>

###  assets

▸ **assets**(attribute?: *`string`*): [ElementFunctions](../interfaces/_element_.elementfunctions.md)

*Defined in [element-functions/function-templates.ts:183](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L183)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` attribute | `string` | &quot;value&quot; |

**Returns:** [ElementFunctions](../interfaces/_element_.elementfunctions.md)

___
<a id="booleanvalue"></a>

###  booleanValue

▸ **booleanValue**(attribute?: *`string`*, trueValue?: *`string`*, falseValue?: *`string`*): [ElementFunctions](../interfaces/_element_.elementfunctions.md)

*Defined in [element-functions/function-templates.ts:51](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L51)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` attribute | `string` | &quot;value&quot; |
| `Default value` trueValue | `string` | &quot;1&quot; |
| `Default value` falseValue | `string` | &quot;0&quot; |

**Returns:** [ElementFunctions](../interfaces/_element_.elementfunctions.md)

___
<a id="filters"></a>

###  filters

▸ **filters**(attribute?: *`string`*, index?: *`string`*): [ElementFunctions](../interfaces/_element_.elementfunctions.md)

*Defined in [element-functions/function-templates.ts:215](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L215)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` attribute | `string` | &quot;value&quot; |
| `Default value` index | `string` | &quot;index&quot; |

**Returns:** [ElementFunctions](../interfaces/_element_.elementfunctions.md)

___
<a id="flags"></a>

###  flags

▸ **flags**(mergeOntoOuterElement?: *`boolean`*, keyAttribute?: *`string`*, valueAttribute?: *`string`*): [ElementFunctions](../interfaces/_element_.elementfunctions.md)

*Defined in [element-functions/function-templates.ts:103](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L103)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` mergeOntoOuterElement | `boolean` | false |
| `Default value` keyAttribute | `string` | &quot;index&quot; |
| `Default value` valueAttribute | `string` | &quot;value&quot; |

**Returns:** [ElementFunctions](../interfaces/_element_.elementfunctions.md)

___
<a id="localetext"></a>

###  localeText

▸ **localeText**(attribute?: *`string`*): [ElementFunctions](../interfaces/_element_.elementfunctions.md)

*Defined in [element-functions/function-templates.ts:119](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L119)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` attribute | `string` | &quot;value&quot; |

**Returns:** [ElementFunctions](../interfaces/_element_.elementfunctions.md)

___
<a id="localetexttosingleobject"></a>

###  localeTextToSingleObject

▸ **localeTextToSingleObject**(keyAttribute?: *`string`*, valueAttribute?: *`string`*): [ElementFunctions](../interfaces/_element_.elementfunctions.md)

*Defined in [element-functions/function-templates.ts:160](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L160)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` keyAttribute | `string` | &quot;index&quot; |
| `Default value` valueAttribute | `string` | &quot;value&quot; |

**Returns:** [ElementFunctions](../interfaces/_element_.elementfunctions.md)

___
<a id="mergeelement"></a>

###  mergeElement

▸ **mergeElement**(elementNameOrFilter: * [ElementNameFilter](_parsers_element_name_filters_.md#elementnamefilter) &#124; `string`*, attribute?: *`string`*): `object`

*Defined in [element-functions/function-templates.ts:236](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L236)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| elementNameOrFilter |  [ElementNameFilter](_parsers_element_name_filters_.md#elementnamefilter) &#124; `string`| - |
| `Default value` attribute | `string` | &quot;value&quot; |

**Returns:** `object`

___
<a id="numbervalue"></a>

###  numberValue

▸ **numberValue**(attribute?: *`string`*): [ElementFunctions](../interfaces/_element_.elementfunctions.md)

*Defined in [element-functions/function-templates.ts:61](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L61)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` attribute | `string` | &quot;value&quot; |

**Returns:** [ElementFunctions](../interfaces/_element_.elementfunctions.md)

___
<a id="parsetooltip"></a>

###  parseTooltip

▸ **parseTooltip**(attribute?: *`string`*): [ElementFunctions](../interfaces/_element_.elementfunctions.md)

*Defined in [element-functions/function-templates.ts:139](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L139)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` attribute | `string` | &quot;value&quot; |

**Returns:** [ElementFunctions](../interfaces/_element_.elementfunctions.md)

___
<a id="removeifvalue"></a>

###  removeIfValue

▸ **removeIfValue**(attributeValue: *`string`*, attribute?: *`string`*): `object`

*Defined in [element-functions/function-templates.ts:71](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L71)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| attributeValue | `string` | - |
| `Default value` attribute | `string` | &quot;value&quot; |

**Returns:** `object`

___
<a id="rendertooltip"></a>

###  renderTooltip

▸ **renderTooltip**(attribute?: *`string`*): [ElementFunctions](../interfaces/_element_.elementfunctions.md)

*Defined in [element-functions/function-templates.ts:149](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L149)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` attribute | `string` | &quot;value&quot; |

**Returns:** [ElementFunctions](../interfaces/_element_.elementfunctions.md)

___
<a id="singleasset"></a>

###  singleAsset

▸ **singleAsset**(attribute?: *`string`*): [ElementFunctions](../interfaces/_element_.elementfunctions.md)

*Defined in [element-functions/function-templates.ts:172](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L172)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` attribute | `string` | &quot;value&quot; |

**Returns:** [ElementFunctions](../interfaces/_element_.elementfunctions.md)

___
<a id="singleelementwithreplacement"></a>

###  singleElementWithReplacement

▸ **singleElementWithReplacement**(attribute?: *`string`*): [ElementFunctions](../interfaces/_element_.elementfunctions.md)

*Defined in [element-functions/function-templates.ts:22](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L22)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` attribute | `string` | &quot;value&quot; |

**Returns:** [ElementFunctions](../interfaces/_element_.elementfunctions.md)

___
<a id="valuefromattributeifonlyhaskeys"></a>

###  valueFromAttributeIfOnlyHasKeys

▸ **valueFromAttributeIfOnlyHasKeys**(attribute?: *`string`*, ...keys: *`string`[]*): [ElementFunctions](../interfaces/_element_.elementfunctions.md)

*Defined in [element-functions/function-templates.ts:32](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L32)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` attribute | `string` | &quot;value&quot; |
| `Rest` keys | `string`[] | - |

**Returns:** [ElementFunctions](../interfaces/_element_.elementfunctions.md)

___
<a id="valuestosingleobject"></a>

###  valuesToSingleObject

▸ **valuesToSingleObject**(keyAttribute?: *`string`*, valueAttribute?: *`string`*): [ElementFunctions](../interfaces/_element_.elementfunctions.md)

*Defined in [element-functions/function-templates.ts:82](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L82)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` keyAttribute | `string` | &quot;index&quot; |
| `Default value` valueAttribute | `string` | &quot;value&quot; |

**Returns:** [ElementFunctions](../interfaces/_element_.elementfunctions.md)

___
<a id="valuestosingleobjectofnumbers"></a>

###  valuesToSingleObjectOfNumbers

▸ **valuesToSingleObjectOfNumbers**(keyAttribute?: *`string`*, valueAttribute?: *`string`*): [ElementFunctions](../interfaces/_element_.elementfunctions.md)

*Defined in [element-functions/function-templates.ts:92](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L92)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` keyAttribute | `string` | &quot;index&quot; |
| `Default value` valueAttribute | `string` | &quot;value&quot; |

**Returns:** [ElementFunctions](../interfaces/_element_.elementfunctions.md)

___

## Object literals

<a id="removefromoutput"></a>

### `<Const>` removeFromOutput

**removeFromOutput**: *`object`*

*Defined in [element-functions/function-templates.ts:14](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L14)*

<a id="removefromoutput.formatelement"></a>

####  formatElement

**● formatElement**: *[removeFromOutput](_formatters_element_formatters_.md#removefromoutput)* =  elementFormatters.removeFromOutput

*Defined in [element-functions/function-templates.ts:15](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L15)*

___

___
<a id="singleelement"></a>

### `<Const>` singleElement

**singleElement**: *`object`*

*Defined in [element-functions/function-templates.ts:18](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L18)*

<a id="singleelement.merge"></a>

####  merge

**● merge**: *`singleElement`* =  elementMergers.singleElement

*Defined in [element-functions/function-templates.ts:19](https://github.com/joeistas/heroes-parser/blob/ad5aa01/src/element-functions/function-templates.ts#L19)*

___

___
