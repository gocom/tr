tr
=====

<!-- [![npm](https://img.shields.io/npm/v/%40gocom%2Ftr)](https://www.npmjs.com/package/@gocom/tr) -->
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=gocom_tr&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=gocom_tr) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=gocom_tr&metric=coverage)](https://sonarcloud.io/summary/new_code?id=gocom_tr) [![MIT](https://img.shields.io/badge/license-MIT-green)](https://github.com/gocom/tr/blob/main/LICENSE) ![TypeScript](https://img.shields.io/badge/types-TypeScript-blue)

Search-and-replaces in a string haystack. This is an implementation of the pseudo-standard string `translate`
replacement function found in other languages, which avoids recursively re-replacing the found matches in the already
replaced values. This is achieved by moving pointer forward when a found needle value is replaced with the wanted
**to** value, which then avoid erroneously searching for needles from the already replaced **to** value. Written
in TypeScript, and supports both client-side web browser and Node.js backend usage.

⚡ Install
-----

Using npm:

```shell
$ npm install @gocom/tr
```

📖 Documentation
-----

See [API Docs](https://github.com/gocom/tr/blob/docs/main/Public/API.md).

📝 Example Usage
-----

### Replace substrings

The following would replace the original `red` substring with `blue` and `blue` with `red`:

```typescript
import {tr} from '@gocom/tr';

const result = tr(
  'blue, red, yellow',
  {
    'red': 'blue',
    'blue': 'red',
  }
);
```

The above `result` variable would become:

```
red, blue, yellow
```

For more see [documentation](https://github.com/gocom/tr/blob/docs/main/Public/API.md).

🛠️ Development
-----

See [CONTRIBUTING.md](https://github.com/gocom/tr/blob/main/CONTRIBUTING.md).
