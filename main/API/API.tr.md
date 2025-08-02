[**@gocom/tr**](../README.md)

***

[@gocom/tr](../README.md) / [API](../Public/API.md) / tr

# Function: tr()

> **tr**(`haystack`, `pairs`): `string`

Defined in: [library/Tr.ts:60](https://github.com/gocom/tr/blob/d768b53543ce63b35a5f07cac228ce05f8680e95/src/library/Tr.ts#L60)

Replaces given pairs in the haystack.

This is implementation of standard **translate** replacement function,
which avoids recursively re-replacing the found matches in
the already replaced values.

This is achieved by moving pointer forward when a found from value
is replaced with the to value, which then avoid searching needles
from the replacement to value.

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

## Parameters

### haystack

`string`

### pairs

## Returns

`string`
