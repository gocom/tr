[**@gocom/tr**](../README.md)

***

[@gocom/tr](../README.md) / [API](../Public/API.md) / tr

# Function: tr()

> **tr**(`haystack`, `pairs`): `string`

Defined in: [library/Tr.ts:63](https://github.com/gocom/tr/blob/b81bc2b725284b3b969bf0ece274ee4647c41fb1/src/library/Tr.ts#L63)

Replaces given pairs in the haystack.

This is implementation of standard **translate** replacement function,
which avoids recursively re-replacing the found matches in
the already replaced values.

This is achieved by moving pointer forward when a found from value
is replaced with the to value, which then avoid searching needles
from the replacement to value.

## Parameters

### haystack

`string`

### pairs

[`Pairs`](../Types/API.Pairs.md)

Replacement from-to pairs as a key-value-object. The object key is the search
needle, and the value is the target replacement value.

## Returns

`string`

The haystack with replacement pairs replaced.

## Example

The following:
```ts
import {tr} from '@gocom/tr';

tr(
 'blue, red, yellow',
 {
   'red': 'blue',
   'blue': 'red'
 }
);
```
Returns:
```
red, blue, yellow
```
