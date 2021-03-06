[heroes-parser](../README.md) > ["logger"](../modules/_logger_.md)

# External module: "logger"

## Index

### Interfaces

* [Logger](../interfaces/_logger_.logger.md)

### Functions

* [buildLogger](_logger_.md#buildlogger)
* [getLogger](_logger_.md#getlogger)

---

## Functions

<a id="buildlogger"></a>

###  buildLogger

▸ **buildLogger**(logger?: *[Logger](../interfaces/_logger_.logger.md)*, logLevel?: *`string`*): [Logger](../interfaces/_logger_.logger.md)

*Defined in [logger.ts:14](https://github.com/joeistas/heroes-parser/blob/be29d1f/src/logger.ts#L14)*

Build heroes parser logger. Must be run at least once before [getLogger](_logger_.md#getlogger) is called

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` logger | [Logger](../interfaces/_logger_.logger.md) |  console |
| `Default value` logLevel | `string` | &quot;info&quot; |

**Returns:** [Logger](../interfaces/_logger_.logger.md)

___
<a id="getlogger"></a>

###  getLogger

▸ **getLogger**(): [Logger](../interfaces/_logger_.logger.md)

*Defined in [logger.ts:41](https://github.com/joeistas/heroes-parser/blob/be29d1f/src/logger.ts#L41)*

Get heroes parser logger. [buildLogger](_logger_.md#buildlogger) must be run before this function can be used

**Returns:** [Logger](../interfaces/_logger_.logger.md)

___

